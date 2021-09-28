package types

import (
	"github.com/charactertoken/ctok/x/charservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type CharserviceKeeper interface {
	GetCharacter(ctx sdk.Context, index string) (val types.Character, found bool)
	SetCharacter(ctx sdk.Context, character types.Character)
}

type BankKeeper interface {
	SendCoinsFromAccountToModule(ctx sdk.Context, senderAddr sdk.AccAddress, recipientModule string, amt sdk.Coins) error
	SendCoins(ctx sdk.Context, fromAddr sdk.AccAddress, toAddr sdk.AccAddress, amt sdk.Coins) error
	BurnCoins(ctx sdk.Context, moduleName string, amt sdk.Coins) error
}
