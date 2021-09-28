package types

import (
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgBuyChar{}

func NewMsgBuyChar(
	creator string,
	index string,
	name string,
	value []byte,
	charType string,
	cost string,
	saleOverEpoch int64,
	license string,
	tradeRestricted bool,
) *MsgBuyChar {
	return &MsgBuyChar{
		Creator:         creator,
		Index:           index,
		Name:            name,
		Value:           value,
		CharType:        charType,
		Cost:            cost,
		SaleTimeMinutes: saleOverEpoch,
		License: license,
		TradeRestricted: tradeRestricted,
	}
}

func (msg *MsgBuyChar) Route() string {
	return RouterKey
}

func (msg *MsgBuyChar) Type() string {
	return "BuyChar"
}

func (msg *MsgBuyChar) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyChar) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyChar) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	trimmedName := strings.TrimSpace(msg.Name)
	if len(trimmedName) == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrNotSupported, "invalid character name, (%s)", trimmedName)
	}
	trimmedCType := strings.TrimSpace(msg.CharType)
	if len(trimmedCType) == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrNotSupported, "invalid protobuf type, (%s)", trimmedCType)
	}
	return nil
}
