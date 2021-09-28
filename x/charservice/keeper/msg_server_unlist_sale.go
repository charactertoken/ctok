package keeper

import (
	"context"

	"github.com/charactertoken/ctok/x/charservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) UnlistSale(goCtx context.Context, msg *types.MsgUnlistSale) (*types.MsgUnlistSaleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// get the character
	if char, ok := k.GetCharacter(ctx, msg.GetIndex()); ok {
		if AdvancedCheckIsForSale(char.GetSaleTime()) {
			// check if the character owner account and transaction creator are equal
			if GetOwner(char).Equals(GetAccount(msg.GetCreator())) {
				char.SaleTime = 0
				k.SetCharacter(ctx, char)
				return &types.MsgUnlistSaleResponse{Index: char.GetIndex()}, nil
			}
		}
	}
	return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "failed to set sale, check time and character permissions")
}
