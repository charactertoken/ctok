package offerservice_test

import (
	"testing"

	keepertest "github.com/charactertoken/ctok/testutil/keeper"
	"github.com/charactertoken/ctok/x/offerservice"
	"github.com/charactertoken/ctok/x/offerservice/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.OfferserviceKeeper(t)
	offerservice.InitGenesis(ctx, *k, genesisState)
	got := offerservice.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
