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

func (k Keeper) OfferContractAll(c context.Context, req *types.QueryAllOfferContractRequest) (*types.QueryAllOfferContractResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var offerContracts []*types.OfferContract
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	offerContractStore := prefix.NewStore(store, types.KeyPrefix(types.OfferContractKey))

	pageRes, err := query.Paginate(offerContractStore, req.Pagination, func(key []byte, value []byte) error {
		var offerContract types.OfferContract
		if err := k.cdc.Unmarshal(value, &offerContract); err != nil {
			return err
		}
		
		if offerContract.ExpiresAt == 0 || AdvancedCheckIfOfferingActive(offerContract.ExpiresAt) {
			offerContracts = append(offerContracts, &offerContract)
		}
		
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllOfferContractResponse{OfferContract: offerContracts, Pagination: pageRes}, nil
}

func (k Keeper) OfferContract(c context.Context, req *types.QueryGetOfferContractRequest) (*types.QueryGetOfferContractResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetOfferContract(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetOfferContractResponse{OfferContract: &val}, nil
}
