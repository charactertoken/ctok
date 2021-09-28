package keeper

import (
	"time"

	"github.com/charactertoken/ctok/x"
	"github.com/charactertoken/ctok/x/charservice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

var CharacterMinPrice = sdk.Coins{sdk.NewInt64Coin(x.SpendDenomination, 1)}

// SetCharacter set a specific character in the store from its index
func (k Keeper) SetCharacter(ctx sdk.Context, character types.Character) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CharacterKey))
	b := k.cdc.MustMarshal(&character)
	store.Set(types.KeyPrefix(character.Index), b)
}

// GetCharacter returns a character from its index
func (k Keeper) GetCharacter(ctx sdk.Context, index string) (val types.Character, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CharacterKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCharacter removes a character from the store
func (k Keeper) RemoveCharacter(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CharacterKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllCharacter returns all character
func (k Keeper) GetAllCharacter(ctx sdk.Context) (list []types.Character) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CharacterKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Character
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func HasOwner(char types.Character) bool {
	return !GetOwner(char).Empty()
}

func GetOwner(char types.Character) sdk.AccAddress {
	return GetAccount(char.Owner)
}

func GetCreator(char types.Character) sdk.AccAddress {
	return GetAccount(char.Creator)
}

func GetAccount(addr string) sdk.AccAddress {
	bech32, err := sdk.AccAddressFromBech32(addr)
	if err != nil {
		return nil
	}
	return bech32
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

func CalcNextSaleTime(timeInMinutes int64) int64 {
	if timeInMinutes <= 0 {
		return 0
	}
	return time.Now().Add(time.Duration(timeInMinutes) * time.Minute).UnixNano()
}
