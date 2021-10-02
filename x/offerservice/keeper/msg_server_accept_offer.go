package keeper

import (
	"context"

	"github.com/charactertoken/ctok/x/offerservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) AcceptOffer(goCtx context.Context, msg *types.MsgAcceptOffer) (*types.MsgAcceptOfferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	
	// check to see if we have an offer at that index
	if offer, ok := k.GetOfferContract(ctx, msg.GetOfferId()); ok {
		if offer.ExpiresAt > 0 && !AdvancedCheckIfOfferingActive(offer.ExpiresAt) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "offer is expired")
		}
		// get bid amount
		coins, err := GetCoins(offer.GetValue())
		if err != nil {
			return nil, err
		}
		// get the char
		if char, ok := k.charserviceKeeper.GetCharacter(ctx, offer.GetCharId()); ok {
			// transfer the funds
			err = k.bankKeeper.SendCoins(ctx, GetCreator(offer), GetOwner(char), coins)
			if err != nil {
				return nil, err
			}
			// transfer control
			char.Owner = offer.GetCreator()
			char.SaleTime = 0
			char.Cost = coins.String()
			k.charserviceKeeper.SetCharacter(ctx, char)
			// clear out all not-accepted offers, no refunds
			store := ctx.KVStore(k.storeKey)
			iter := sdk.KVStorePrefixIterator(store, types.KeyPrefix(types.OfferContractKey))
			defer iter.Close()
			for ; iter.Valid(); iter.Next() {
				var tempOffer types.OfferContract
				k.cdc.MustUnmarshal(iter.Value(), &tempOffer)
				if tempOffer.CharId == char.GetIndex() {
					store.Delete(iter.Key())
				}
			}
			return &types.MsgAcceptOfferResponse{}, nil
		}
	}
	return nil, sdkerrors.Wrap(sdkerrors.ErrLogic, "no offer accepted")
}
