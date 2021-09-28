package types

import (
	"strings"
	
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateOffer{}

func NewMsgCreateOffer(creator string, bid string, charId string, expireInMinutes int64) *MsgCreateOffer {
	return &MsgCreateOffer{
		Creator:         creator,
		Bid:             bid,
		CharId:          charId,
		ExpireInMinutes: expireInMinutes,
	}
}

func (msg *MsgCreateOffer) Route() string {
	return RouterKey
}

func (msg *MsgCreateOffer) Type() string {
	return "CreateOffer"
}

func (msg *MsgCreateOffer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateOffer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateOffer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	trimBid := strings.TrimSpace(msg.Bid)
	if len(trimBid) == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrLogic, "bid cannot be empty")
	}
	trimCharId := strings.TrimSpace(msg.CharId)
	if len(trimCharId) == 0 || len(trimCharId) < 80 {
		return sdkerrors.Wrapf(sdkerrors.ErrLogic, "invalid character id")
	}
	return nil
}
