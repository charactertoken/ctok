package keeper

import (
	"context"

	"github.com/charactertoken/ctok/x/offerservice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetAllCharOffers(goCtx context.Context, req *types.QueryGetAllCharOffersRequest) (*types.QueryGetAllCharOffersResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var offers []*types.OfferContract
	ctx := sdk.UnwrapSDKContext(goCtx)
	
	store := ctx.KVStore(k.storeKey)
	offeringStore := prefix.NewStore(store, types.KeyPrefix(types.OfferContractKey))
	
	pageRes, err := query.Paginate(offeringStore, req.Pagination, func(key []byte, value []byte) error {
		var offer types.OfferContract
		if err := k.cdc.Unmarshal(value, &offer); err != nil {
			return err
		}
		
		if offer.GetCharId() == req.GetCharId() {
			if offer.ExpiresAt == 0 || AdvancedCheckIfOfferingActive(offer.ExpiresAt) {
				offers = append(offers, &offer)
			}
		}
		return nil
	})
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &types.QueryGetAllCharOffersResponse{Pagination: pageRes}, nil
}
