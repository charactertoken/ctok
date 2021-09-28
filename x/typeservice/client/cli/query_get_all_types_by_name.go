package cli

import (
	"strconv"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/spf13/cobra"

	"github.com/charactertoken/ctok/x/typeservice/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
)

var _ = strconv.Itoa(0)

func CmdGetAllTypesByName() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-all-types-by-name",
		Short: "Query get_all_types_by_name",
		Args:  cobra.MinimumNArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			var argsName, argsOffset, argsLimit string
			switch len(args) {
			case 3:
				argsLimit = args[2]
				fallthrough
			case 2:
				argsOffset = args[1]
				fallthrough
			case 1:
				argsName = args[0]
			default:
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "expected at least 1 param, got %d", len(args))
			}
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			offsetInt, _ := strconv.Atoi(argsOffset)
			pageLimit, _ := strconv.Atoi(argsLimit)
			if pageLimit == 0 {
				pageLimit = 20
			}
			params := &types.QueryGetAllTypesByNameRequest{
				Name: argsName,
				Pagination: &query.PageRequest{
					Offset: uint64(offsetInt),
					Limit:  uint64(pageLimit),
				},
			}

			res, err := queryClient.GetAllTypesByName(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
