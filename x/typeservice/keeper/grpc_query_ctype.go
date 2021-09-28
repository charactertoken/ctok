package keeper

import (
	"context"

	"github.com/charactertoken/ctok/x/typeservice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CtypeAll(c context.Context, req *types.QueryAllCtypeRequest) (*types.QueryAllCtypeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var ctypes []*types.Ctype
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	ctypeStore := prefix.NewStore(store, types.KeyPrefix(types.CtypeKey))

	pageRes, err := query.Paginate(ctypeStore, req.Pagination, func(key []byte, value []byte) error {
		var ctype types.Ctype
		if err := k.cdc.Unmarshal(value, &ctype); err != nil {
			return err
		}

		ctypes = append(ctypes, &ctype)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCtypeResponse{Ctype: ctypes, Pagination: pageRes}, nil
}

func (k Keeper) Ctype(c context.Context, req *types.QueryGetCtypeRequest) (*types.QueryGetCtypeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCtype(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetCtypeResponse{Ctype: &val}, nil
}
