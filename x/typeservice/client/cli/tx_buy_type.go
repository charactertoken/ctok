package cli

import (
	"encoding/base64"
	"strconv"

	"github.com/spf13/cobra"

	"github.com/charactertoken/ctok/x/typeservice/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

var _ = strconv.Itoa(0)

func CmdBuyType() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "buy-type [name] [language] [schemaFile] [messageName] [group]",
		Short: "Broadcast message buy-type",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName := args[0]
			argsLanguage := args[1]
			argsSchemaFile := args[2]
			argsMsgName := args[3]
			argsGroup := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			schemaFileBytes := make([]byte, base64.URLEncoding.EncodedLen(len(argsSchemaFile)))
			_, err = base64.URLEncoding.Decode(schemaFileBytes, []byte(argsSchemaFile))
			if err != nil {
				return err
			}
			msg := types.NewMsgBuyType(
				clientCtx.GetFromAddress().String(), argsName, argsLanguage, schemaFileBytes,
				argsMsgName, argsGroup,
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
