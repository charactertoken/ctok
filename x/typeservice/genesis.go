package typeservice

import (
	"github.com/charactertoken/ctok/x/typeservice/keeper"
	"github.com/charactertoken/ctok/x/typeservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the ctype
	for _, elem := range genState.CtypeList {
		k.SetCtype(ctx, *elem)
	}
	
	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	
	// this line is used by starport scaffolding # genesis/module/export
	// Get all ctype
	ctypeList := k.GetAllCtype(ctx)
	for _, elem := range ctypeList {
		elem := elem
		genesis.CtypeList = append(genesis.CtypeList, &elem)
	}
	
	// this line is used by starport scaffolding # ibc/genesis/export
	
	return genesis
}
