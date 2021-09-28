package keeper

import (
	"context"
	"time"

	"github.com/charactertoken/ctok/x"
	"github.com/charactertoken/ctok/x/typeservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

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

type TypeserviceChecker interface {
	Ctype(c context.Context, req *types.QueryGetCtypeRequest) (*types.QueryGetCtypeResponse, error)
}

func AdvancedCheckValue(goCtx context.Context, ctype string, value []byte, ctypeKeeper TypeserviceChecker) error {
	// value check
	if len(value) == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrNotSupported, "insufficient value size, 0")
	}
	if _, err := ctypeKeeper.Ctype(goCtx, &types.QueryGetCtypeRequest{Index: ctype}); err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrLogic, "protobuf retrieval error, (%s)", err.Error())
	}
	return nil
}

func AdvancedCheckIsForSale(t int64) bool {
	return t > 0 && time.Unix(0, t).After(time.Now().UTC())
}
