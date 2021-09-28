package keeper

import (
	"context"

	"github.com/charactertoken/ctok/x/charservice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetCharByName(goCtx context.Context, req *types.QueryGetCharByNameRequest) (*types.QueryGetCharByNameResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	characterStore := prefix.NewStore(store, types.KeyPrefix(types.CharacterKey))

	charIterator := characterStore.Iterator(nil, nil)
	defer charIterator.Close()

	var character types.Character
	for ; charIterator.Valid(); charIterator.Next() {
		var tempChar types.Character
		err := k.cdc.Unmarshal(charIterator.Value(), &tempChar)
		if err != nil {
			return nil, sdkerrors.Wrapf(err, "search disrupted when looking for '%s'", req.Name)
		}
		if tempChar.GetName() == req.GetName() {
			character = tempChar
			break
		}
	}

	if character.GetName() != req.GetName() {
		return nil, sdkerrors.ErrKeyNotFound
	}
	return &types.QueryGetCharByNameResponse{Character: &character}, nil
}
