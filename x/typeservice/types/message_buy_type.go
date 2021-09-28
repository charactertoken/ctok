package types

import (
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgBuyType{}

func NewMsgBuyType(creator string, name string, language string, schemaFile []byte, messageName string, group string) *MsgBuyType {
	return &MsgBuyType{
		Creator:     creator,
		Name:        name,
		Language:    language,
		SchemaFile:  schemaFile,
		MessageName: messageName,
		Group:       group,
	}
}

func (msg *MsgBuyType) Route() string {
	return RouterKey
}

func (msg *MsgBuyType) Type() string {
	return "BuyType"
}

func (msg *MsgBuyType) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyType) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyType) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	trimmedName := strings.TrimSpace(msg.Name)
	if len(trimmedName) == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrNotSupported, "invalid type name, (%s)", trimmedName)
	}

	return nil
}
