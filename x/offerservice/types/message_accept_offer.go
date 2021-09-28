package types

import (
	"strings"
	
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgAcceptOffer{}

func NewMsgAcceptOffer(creator string, offerId string) *MsgAcceptOffer {
	return &MsgAcceptOffer{
		Creator: creator,
		OfferId: offerId,
	}
}

func (msg *MsgAcceptOffer) Route() string {
	return RouterKey
}

func (msg *MsgAcceptOffer) Type() string {
	return "AcceptOffer"
}

func (msg *MsgAcceptOffer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAcceptOffer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAcceptOffer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	trimCharId := strings.TrimSpace(msg.OfferId)
	if len(trimCharId) == 0 || len(trimCharId) < 80 {
		return sdkerrors.Wrapf(sdkerrors.ErrLogic, "invalid character id")
	}
	return nil
}
