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

func (k Keeper) CharacterAll(c context.Context, req *types.QueryAllCharacterRequest) (*types.QueryAllCharacterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var characters []*types.Character
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	characterStore := prefix.NewStore(store, types.KeyPrefix(types.CharacterKey))

	pageRes, err := query.Paginate(characterStore, req.Pagination, func(key []byte, value []byte) error {
		var character types.Character
		if err := k.cdc.Unmarshal(value, &character); err != nil {
			return err
		}

		characters = append(characters, &character)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCharacterResponse{Character: characters, Pagination: pageRes}, nil
}

func (k Keeper) Character(c context.Context, req *types.QueryGetCharacterRequest) (*types.QueryGetCharacterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCharacter(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetCharacterResponse{Character: &val}, nil
}
