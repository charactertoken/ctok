package keeper

import (
	"context"

	"github.com/charactertoken/ctok/x/charservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) SetSale(goCtx context.Context, msg *types.MsgSetSale) (*types.MsgSetSaleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := AdvancedCheckCost(msg.GetCost())
	if err != nil {
		return nil, err
	}
	nextSaleTime := CalcNextSaleTime(msg.GetSaleTimeMinutes())
	// ensure the request will set the character into a sale state
	if AdvancedCheckIsForSale(nextSaleTime) {
		// get the character
		if char, ok := k.GetCharacter(ctx, msg.GetIndex()); ok {
			// check trade restrictions
			if char.TradeRestricted {
				return nil, sdkerrors.Wrap(sdkerrors.ErrNotSupported, "trading is restricted on this char")
			}
			// check if the character owner account and transaction creator are equal
			if GetOwner(char).Equals(GetAccount(msg.GetCreator())) {
				char.SaleTime = nextSaleTime
				char.Cost = msg.GetCost()
				k.SetCharacter(ctx, char)
				return &types.MsgSetSaleResponse{Index: char.GetIndex()}, nil
			}
		}
	}
	return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "failed to set sale, check time and owner permissions")
}
