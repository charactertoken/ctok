package offerservice

import (
	"github.com/charactertoken/ctok/x/offerservice/keeper"
	"github.com/charactertoken/ctok/x/offerservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the offerContract
	for _, elem := range genState.OfferContractList {
		k.SetOfferContract(ctx, *elem)
	}
	
	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	
	// this line is used by starport scaffolding # genesis/module/export
	// Get all offerContract
	offerContractList := k.GetAllOfferContract(ctx)
	for _, elem := range offerContractList {
		elem := elem
		genesis.OfferContractList = append(genesis.OfferContractList, &elem)
	}
	
	// this line is used by starport scaffolding # ibc/genesis/export
	
	return genesis
}
