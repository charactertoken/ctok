package keeper

import (
	"strings"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func AdvancedTypeValidator(protoFile []byte) error {
	protoFileString := string(protoFile)
	if len(protoFile) == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrNotSupported, "proto cannot be 0 length")
	}
	strings.Contains(protoFileString, "message")
	acceptedSyntax := strings.Contains(protoFileString, "\"proto3\"") ||
		strings.Contains(protoFileString, "\"proto2\"")
	if !acceptedSyntax {
		return sdkerrors.Wrap(sdkerrors.ErrNotSupported, "proto must be proto2 or proto3 syntax")
	}
	return nil
}
