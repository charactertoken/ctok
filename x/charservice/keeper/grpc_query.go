package keeper

import (
	"github.com/charactertoken/ctok/x/charservice/types"
)

var _ types.QueryServer = Keeper{}
