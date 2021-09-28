package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/charactertoken/ctok/x/offerservice/types"
)

func createNOfferContract(keeper *Keeper, ctx sdk.Context, n int) []types.OfferContract {
	items := make([]types.OfferContract, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetOfferContract(ctx, items[i])
	}
	return items
}

func TestOfferContractGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNOfferContract(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetOfferContract(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestOfferContractRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNOfferContract(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveOfferContract(ctx, item.Index)
		_, found := keeper.GetOfferContract(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestOfferContractGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNOfferContract(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllOfferContract(ctx))
}
