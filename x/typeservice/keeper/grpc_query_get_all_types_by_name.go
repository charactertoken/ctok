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

func (k Keeper) GetAllTypesByName(goCtx context.Context, req *types.QueryGetAllTypesByNameRequest) (*types.QueryGetAllTypesByNameResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	var ctypes []*types.Ctype
	store := ctx.KVStore(k.storeKey)
	typeStore := prefix.NewStore(store, types.KeyPrefix(types.CtypeKey))

	pageRes, err := query.Paginate(
		typeStore, req.GetPagination(), func(key []byte, value []byte) error {
			var ctype types.Ctype
			if err := k.cdc.Unmarshal(value, &ctype); err != nil {
				return status.Error(codes.Internal, err.Error())
			}

			if ctype.GetName() == req.GetName() {
				ctypes = append(ctypes, &ctype)
			}
			return nil
		},
	)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &types.QueryGetAllTypesByNameResponse{
		Ctype:      ctypes,
		Pagination: pageRes,
	}, nil
}
