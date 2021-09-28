package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/charactertoken/ctok/x/charservice/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
)

var _ = strconv.Itoa(0)

func CmdGetAllCharsByCreator() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-all-chars-by-creator [creator]",
		Short: "Query get_all_chars_by_creator",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			reqCreator := string(args[0])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetAllCharsByCreatorRequest{

				Creator: string(reqCreator),
			}

			res, err := queryClient.GetAllCharsByCreator(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
