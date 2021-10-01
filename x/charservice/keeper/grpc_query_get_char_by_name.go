package keeper

import (
	"context"

	"github.com/charactertoken/ctok/x/charservice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetCharByName(goCtx context.Context, req *types.QueryGetCharByNameRequest) (*types.QueryGetCharByNameResponse, error) {
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
			return err
		}
		
		if req.GetName() == character.GetName() {
			characters = append(characters, &character)
		}
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	pageRes.Total = uint64(len(characters))
	
	return &types.QueryGetCharByNameResponse{Pagination: pageRes, Character: characters}, nil
}
