package types

import (
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSetSale{}

func NewMsgSetSale(creator string, index string, cost string, saleEndTime int64) *MsgSetSale {
	return &MsgSetSale{
		Creator:         creator,
		Index:           index,
		Cost:            cost,
		SaleTimeMinutes: saleEndTime,
	}
}

func (msg *MsgSetSale) Route() string {
	return RouterKey
}

func (msg *MsgSetSale) Type() string {
	return "SetSale"
}

func (msg *MsgSetSale) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetSale) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetSale) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.SaleTimeMinutes < 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrNotSupported, "invalid sale length (%d)", msg.SaleTimeMinutes)
	}
	trimmedIdex := strings.TrimSpace(msg.Index)
	if len(trimmedIdex) == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrNotSupported, "invalid character index, (%s)", trimmedIdex)
	}
	return nil
}
