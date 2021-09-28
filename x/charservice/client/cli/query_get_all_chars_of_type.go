package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/charactertoken/ctok/x/charservice/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
)

var _ = strconv.Itoa(0)

func CmdGetAllCharsOfType() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-all-chars-of-type [ctype]",
		Short: "Query get_all_chars_of_type",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			reqCtype := string(args[0])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetAllCharsOfTypeRequest{

				Ctype: string(reqCtype),
			}

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}
			params.Pagination = pageReq

			res, err := queryClient.GetAllCharsOfType(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
