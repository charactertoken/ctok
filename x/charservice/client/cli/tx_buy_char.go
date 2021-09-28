package cli

import (
	"encoding/base64"
	"strconv"
	"time"
	
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/spf13/cobra"
	
	"github.com/charactertoken/ctok/x/charservice/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

var _ = strconv.Itoa(0)

func CmdBuyChar() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "buy-char [name] [ctype] [value] [cost] [tradeRestrict] [saleTime] [index] [license]",
		Short: "Broadcast message buy-char, json argument required",
		Args:  cobra.MinimumNArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			var argName, argValue, argCtype, argTradeRestricted,
			argCost, argSaleTime, argIndex, argLicense string
			switch len(args) {
			case 8:
				argLicense = args[7]
				fallthrough
			case 7:
				argIndex = args[6]
				fallthrough
			case 6:
				argSaleTime = args[5]
				fallthrough
			case 5:
				argTradeRestricted = args[4]
				fallthrough
			case 4:
				argCost = args[3]
				fallthrough
			case 3:
				argValue = args[2]
				fallthrough
			case 2:
				argCtype = args[1]
				fallthrough
			case 1:
				argName = args[0]
			default:
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "expected at least 1 param, got %d", len(args))
			}
			
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			
			// value as base64
			byteVal := []byte(argValue)
			valueBytes := make([]byte, base64.URLEncoding.EncodedLen(len(byteVal)))
			_, err = base64.URLEncoding.Decode(valueBytes, byteVal)
			if err != nil {
				return err
			}
			
			// change minutes into unix epoch
			var forSaleEpoch int64
			saleTimeAsInt, _ := strconv.Atoi(argSaleTime)
			if saleTimeAsInt > 0 {
				forSaleEpoch = time.Now().Add(time.Duration(saleTimeAsInt) * time.Minute).UnixNano()
			}
			
			tradeRestricted := false
			if len(argTradeRestricted) > 0 {
				tradeRestricted, err = strconv.ParseBool(argTradeRestricted)
			}
			
			msg := types.NewMsgBuyChar(
				clientCtx.GetFromAddress().String(),
				argIndex, argName, valueBytes, argCtype,
				argCost, forSaleEpoch, argLicense, tradeRestricted,
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
