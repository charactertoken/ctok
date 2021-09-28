package types

import (
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgUnlistSale{}

func NewMsgUnlistSale(creator string, index string) *MsgUnlistSale {
	return &MsgUnlistSale{
		Creator: creator,
		Index:   index,
	}
}

func (msg *MsgUnlistSale) Route() string {
	return RouterKey
}

func (msg *MsgUnlistSale) Type() string {
	return "UnlistSale"
}

func (msg *MsgUnlistSale) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUnlistSale) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUnlistSale) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	trimmedIdex := strings.TrimSpace(msg.Index)
	if len(trimmedIdex) == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrNotSupported, "invalid character index, (%s)", trimmedIdex)
	}
	return nil
}
