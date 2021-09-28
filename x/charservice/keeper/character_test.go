package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/charactertoken/ctok/x/charservice/types"
)

func createNCharacter(keeper *Keeper, ctx sdk.Context, n int) []types.Character {
	items := make([]types.Character, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetCharacter(ctx, items[i])
	}
	return items
}

func TestCharacterGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCharacter(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCharacter(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestCharacterRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCharacter(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCharacter(ctx, item.Index)
		_, found := keeper.GetCharacter(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestCharacterGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCharacter(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllCharacter(ctx))
}
