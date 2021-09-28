package keeper

import (
	"time"
	
	"github.com/charactertoken/ctok/x"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func AdvancedCheckIfOfferingActive(t int64) bool {
	return t > 0 && time.Unix(0, t).After(time.Now().UTC())
}

func AdvancedCheckCost(cost string) error {
	// cost check
	coins, err := sdk.ParseCoinsNormalized(cost)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidCoins, "invalid cost, (%s)", err.Error())
	}
	if err = coins.Validate(); err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrNotSupported, "invalid cost, (%s)", err.Error())
	}
	if coins.AmountOf(x.SpendDenomination).IsNegative() || coins.AmountOf(x.SpendDenomination).IsZero() {
		return sdkerrors.Wrapf(sdkerrors.ErrInsufficientFee, "invalid cost amount in %s", x.SpendDenomination)
	}
	return nil
}
