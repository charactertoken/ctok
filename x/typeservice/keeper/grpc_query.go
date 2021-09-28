package keeper

import (
	"github.com/charactertoken/ctok/x/typeservice/types"
)

var _ types.QueryServer = Keeper{}
