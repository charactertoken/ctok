package typeservice_test

import (
	"testing"

	keepertest "github.com/charactertoken/ctok/testutil/keeper"
	"github.com/charactertoken/ctok/x/typeservice"
	"github.com/charactertoken/ctok/x/typeservice/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TypeserviceKeeper(t)
	typeservice.InitGenesis(ctx, *k, genesisState)
	got := typeservice.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
