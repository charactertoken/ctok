package keeper

import (
	"github.com/charactertoken/ctok/x/offerservice/types"
)

var _ types.QueryServer = Keeper{}
