package keeper

import (
	"context"

	"github.com/charactertoken/ctok/x/charservice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetAllCharsOfOwner(goCtx context.Context, req *types.QueryGetAllCharsOfOwnerRequest) (*types.QueryGetAllCharsOfOwnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var characters []*types.Character
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	characterStore := prefix.NewStore(store, types.KeyPrefix(types.CharacterKey))

	pageRes, err := query.Paginate(characterStore, req.Pagination, func(key []byte, value []byte) error {
		var character types.Character
		if err := k.cdc.Unmarshal(value, &character); err != nil {
			return status.Error(codes.Internal, err.Error())
		}

		if character.GetOwner() == req.GetOwner() {
			characters = append(characters, &character)
		}
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	pageRes.Total = uint64(len(characters))

	return &types.QueryGetAllCharsOfOwnerResponse{
		Character:  characters,
		Pagination: pageRes,
	}, nil
}
