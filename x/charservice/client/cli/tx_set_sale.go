package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/charactertoken/ctok/x/charservice/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

var _ = strconv.Itoa(0)

func CmdSetSale() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "set-sale [index] [cost] [saleLengthInMinutes]",
		Short: "Broadcast message set-sale",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName := string(args[0])
			argsCost := string(args[1])
			saleEndTime := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			saleLength, err := strconv.Atoi(saleEndTime)
			if err != nil {
				return err
			}
			msg := types.NewMsgSetSale(clientCtx.GetFromAddress().String(), string(argsName), string(argsCost), int64(saleLength))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
