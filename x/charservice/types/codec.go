package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgUnlistSale{}, "charservice/UnlistSale", nil)

	cdc.RegisterConcrete(&MsgSetSale{}, "charservice/SetSale", nil)

	cdc.RegisterConcrete(&MsgBuyChar{}, "charservice/BuyChar", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUnlistSale{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSetSale{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBuyChar{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
