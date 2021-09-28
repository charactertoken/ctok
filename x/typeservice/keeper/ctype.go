package keeper

import (
	"github.com/charactertoken/ctok/x"
	"github.com/charactertoken/ctok/x/typeservice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

var CtypeMinPrice = sdk.Coins{sdk.NewInt64Coin(x.SpendDenomination, 10)}

// SetCtype set a specific ctype in the store from its index
func (k Keeper) SetCtype(ctx sdk.Context, ctype types.Ctype) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CtypeKey))
	b := k.cdc.MustMarshal(&ctype)
	store.Set(types.KeyPrefix(ctype.Index), b)
}

// GetCtype returns a ctype from its index
func (k Keeper) GetCtype(ctx sdk.Context, index string) (val types.Ctype, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CtypeKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCtype removes a ctype from the store
func (k Keeper) RemoveCtype(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CtypeKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllCtype returns all ctype
func (k Keeper) GetAllCtype(ctx sdk.Context) (list []types.Ctype) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CtypeKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Ctype
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func GetAccount(addr string) sdk.AccAddress {
	bech32, err := sdk.AccAddressFromBech32(addr)
	if err != nil {
		return nil
	}
	return bech32
}
