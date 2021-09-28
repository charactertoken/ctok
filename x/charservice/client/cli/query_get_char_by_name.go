package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/charactertoken/ctok/x/charservice/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
)

var _ = strconv.Itoa(0)

func CmdGetCharByName() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-char-by-name [name]",
		Short: "Query get_char_by_name",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			reqName := string(args[0])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetCharByNameRequest{

				Name: string(reqName),
			}

			res, err := queryClient.GetCharByName(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
