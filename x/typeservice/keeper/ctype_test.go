package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/charactertoken/ctok/x/typeservice/types"
)

func createNCtype(keeper *Keeper, ctx sdk.Context, n int) []types.Ctype {
	items := make([]types.Ctype, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetCtype(ctx, items[i])
	}
	return items
}

func TestCtypeGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCtype(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCtype(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestCtypeRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCtype(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCtype(ctx, item.Index)
		_, found := keeper.GetCtype(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestCtypeGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCtype(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllCtype(ctx))
}
