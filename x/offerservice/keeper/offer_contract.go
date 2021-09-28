package keeper

import (
	"time"
	
	"github.com/charactertoken/ctok/x"
	chartypes "github.com/charactertoken/ctok/x/charservice/types"
	"github.com/charactertoken/ctok/x/offerservice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

var OfferingMinPrice = sdk.Coins{sdk.NewInt64Coin(x.SpendDenomination, 1)}

// SetOfferContract set a specific offerContract in the store from its index
func (k Keeper) SetOfferContract(ctx sdk.Context, offerContract types.OfferContract) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OfferContractKey))
	b := k.cdc.MustMarshal(&offerContract)
	store.Set(types.KeyPrefix(offerContract.Index), b)
}

// GetOfferContract returns a offerContract from its index
func (k Keeper) GetOfferContract(ctx sdk.Context, index string) (val types.OfferContract, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OfferContractKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveOfferContract removes a offerContract from the store
func (k Keeper) RemoveOfferContract(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OfferContractKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllOfferContract returns all offerContract
func (k Keeper) GetAllOfferContract(ctx sdk.Context) (list []types.OfferContract) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OfferContractKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.OfferContract
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func GetOwner(char chartypes.Character) sdk.AccAddress {
	return GetAccount(char.Owner)
}

func GetCreator(char types.OfferContract) sdk.AccAddress {
	return GetAccount(char.Creator)
}

func GetAccount(addr string) sdk.AccAddress {
	bech32, err := sdk.AccAddressFromBech32(addr)
	if err != nil {
		return nil
	}
	return bech32
}
func CalcNextExpireTime(timeInMinutes int64) int64 {
	if timeInMinutes <= 0 {
		return 0
	}
	return time.Now().Add(time.Duration(timeInMinutes) * time.Minute).UnixNano()
}

func GetCoins(coins string) (sdk.Coins, error) {
	err := AdvancedCheckCost(coins)
	if err != nil {
		return nil, err
	}
	parsedCoins, err := sdk.ParseCoinsNormalized(coins)
	if err != nil {
		return nil, err
	}
	return sdk.Coins{
		sdk.NewInt64Coin(
			x.SpendDenomination, parsedCoins.AmountOf(
				x.SpendDenomination,
			).Int64(),
		),
	}, nil
}
