package keeper

import (
	"context"

	"github.com/charactertoken/ctok/x"
	"github.com/charactertoken/ctok/x/typeservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) BuyType(goCtx context.Context, msg *types.MsgBuyType) (*types.MsgBuyTypeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var err error
	// lightly validate schema
	if err = AdvancedTypeValidator(msg.SchemaFile); err != nil {
		return nil, err
	}
	// establish the index here because after sale is too late
	var ctype types.Ctype
	ctype.Index, err = x.NewIndex()
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrLogic, "index creation failed during buy")
	}
	ctype.Name = msg.GetName()
	ctype.Creator = msg.GetCreator()
	ctype.SchemaFile = msg.GetSchemaFile()
	ctype.MessageName = msg.GetMessageName()
	ctype.Language = msg.GetLanguage()
	ctype.Group = msg.GetGroup()
	// allow creator of msg to purchase
	creator := GetAccount(msg.GetCreator())
	err = k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, CtypeMinPrice)
	if err != nil {
		return nil, err
	}
	// burn the withdrawn coins to lower amount
	err = k.bankKeeper.BurnCoins(ctx, types.ModuleName, CtypeMinPrice)
	if err != nil {
		return nil, err
	}
	k.SetCtype(ctx, ctype)
	return &types.MsgBuyTypeResponse{Index: ctype.GetIndex()}, nil
}
