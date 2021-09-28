package keeper

import (
	"context"
	
	"github.com/charactertoken/ctok/x"
	"github.com/charactertoken/ctok/x/offerservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateOffer(goCtx context.Context, msg *types.MsgCreateOffer) (*types.MsgCreateOfferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	
	// perform validations
	offerIndex, err := x.NewIndex()
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrLogic, "index creation failed during offering")
	}
	if err = AdvancedCheckCost(msg.GetBid()); err != nil {
		return nil, err
	}
	
	// retrieve the character
	if char, ok := k.charserviceKeeper.GetCharacter(ctx, msg.GetCharId()); ok {
		// check trade restrictions
		if char.TradeRestricted {
			return nil, sdkerrors.Wrap(sdkerrors.ErrNotSupported, "trading is restricted on this char")
		}
		// charge the msg creator the fee
		// purchasers pay the minimum price for an offering
		err = k.bankKeeper.SendCoinsFromAccountToModule(ctx, GetAccount(msg.GetCreator()), types.ModuleName, OfferingMinPrice)
		if err != nil {
			return nil, err
		}
		// burn the appropriate amount of coins
		err = k.bankKeeper.BurnCoins(ctx, types.ModuleName, OfferingMinPrice)
		if err != nil {
			return nil, err
		}
		// save the offer contract
		k.SetOfferContract(ctx, types.OfferContract{
			ExpiresAt: CalcNextExpireTime(msg.GetExpireInMinutes()),
			Creator:   msg.GetCreator(),
			Index:     offerIndex,
			CharId:    msg.GetCharId(),
			Value:     msg.GetBid(),
		})
		// return the new contract's index
		return &types.MsgCreateOfferResponse{Index: offerIndex}, nil
	}
	
	return nil, sdkerrors.Wrap(sdkerrors.ErrLogic, "offer creation failure, check that character exists")
}
