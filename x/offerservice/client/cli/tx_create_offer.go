package cli

import (
	"strconv"
	
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/spf13/cobra"
	
	"github.com/charactertoken/ctok/x/offerservice/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

var _ = strconv.Itoa(0)

func CmdCreateOffer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-offer [charId] [bid] [expireInMinutes]",
		Short: "Broadcast message create-offer",
		Args:  cobra.MinimumNArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			var argsCharId, argsBid, argsExpireInMinutes string
			switch len(args) {
			case 3:
				argsExpireInMinutes = string(args[2])
				fallthrough
			case 2:
				argsBid = string(args[1])
				fallthrough
			case 1:
				argsCharId = string(args[0])
			default:
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "expected at least 1-3 param, got %d", len(args))
			}
			
			
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			
			var expireInMinutes int
			if len(argsExpireInMinutes) > 0 {
				expireInMinutes, err = strconv.Atoi(argsExpireInMinutes)
				if err != nil {
					return err
				}
			}
			msg := types.NewMsgCreateOffer(
				clientCtx.GetFromAddress().String(), string(argsBid), string(argsCharId),
				int64(expireInMinutes),
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}
	
	flags.AddTxFlagsToCmd(cmd)
	
	return cmd
}
