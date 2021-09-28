package charservice

import (
	"github.com/charactertoken/ctok/x/charservice/keeper"
	"github.com/charactertoken/ctok/x/charservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the character
	for _, elem := range genState.CharacterList {
		k.SetCharacter(ctx, *elem)
	}
	
	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	
	// this line is used by starport scaffolding # genesis/module/export
	// Get all character
	characterList := k.GetAllCharacter(ctx)
	for _, elem := range characterList {
		elem := elem
		genesis.CharacterList = append(genesis.CharacterList, &elem)
	}
	
	// this line is used by starport scaffolding # ibc/genesis/export
	
	return genesis
}
