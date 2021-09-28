package charservice_test

import (
	"testing"

	keepertest "github.com/charactertoken/ctok/testutil/keeper"
	"github.com/charactertoken/ctok/x/charservice"
	"github.com/charactertoken/ctok/x/charservice/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CharserviceKeeper(t)
	charservice.InitGenesis(ctx, *k, genesisState)
	got := charservice.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
