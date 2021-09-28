package types

import (
	"context"

	"github.com/charactertoken/ctok/x/typeservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type BankKeeper interface {
	SendCoinsFromAccountToModule(ctx sdk.Context, senderAddr sdk.AccAddress, recipientModule string, amt sdk.Coins) error
	SendCoins(ctx sdk.Context, fromAddr sdk.AccAddress, toAddr sdk.AccAddress, amt sdk.Coins) error
	BurnCoins(ctx sdk.Context, moduleName string, amt sdk.Coins) error
}

type TypeserviceKeeper interface {
	Ctype(c context.Context, req *types.QueryGetCtypeRequest) (*types.QueryGetCtypeResponse, error)
}
