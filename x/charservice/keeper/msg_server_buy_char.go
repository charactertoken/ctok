package keeper

import (
	"context"
	
	"github.com/charactertoken/ctok/x"
	"github.com/charactertoken/ctok/x/charservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) BuyChar(goCtx context.Context, msg *types.MsgBuyChar) (*types.MsgBuyCharResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	_ = ctx

	var char types.Character
	var ok bool

	// get the character
	char, ok = k.GetCharacter(ctx, msg.GetIndex())
	
	// --- Pre-Validations ---
	// check if the character is trade restricted
	if char.TradeRestricted {
		return nil, sdkerrors.Wrap(sdkerrors.ErrNotSupported, "trading is restricted on this char")
	}
	// check if the owner set it for sale
	if ok && HasOwner(char) && !AdvancedCheckIsForSale(char.GetSaleTime()) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrLogic, "owned but not for sale")
	}
	if ok && HasOwner(char) && GetAccount(msg.GetCreator()).Equals(GetOwner(char)) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrLogic, "cannot buy your own character")
	}
	// --- End Pre-Validations ---
	
	// check if a character by that name has an owner
	// if it is owned, buy it
	if ok && !GetOwner(char).Equals(GetAccount(msg.GetCreator()))  {
		// get the cost of the character set by the owner
		cost, err := GetCoins(char.GetCost())
		if err != nil {
			return nil, err
		}
		// get the offer from the purchaser
		offer, err := GetCoins(msg.GetCost())
		if err != nil {
			return nil, err
		}
		// if the offer is LT cost, deny transaction
		if offer.IsAllLT(cost) {
			return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFee, "offer must be greater than or equal to price")
		}
		// owner, the account we're sending coins to
		owner := GetOwner(char)
		// msg creator, the account starting the transaction
		msgCreator := GetAccount(msg.GetCreator())
		err = k.bankKeeper.SendCoins(ctx, msgCreator, owner, offer)
		if err != nil {
			return nil, err
		}
		char.Cost = offer.String()
	} else {
		// prepare an index
		preparedNewIndex, err := x.NewIndex()
		if err != nil {
			return nil, sdkerrors.Wrap(sdkerrors.ErrLogic, "index creation failed during buy")
		}
		err = AdvancedCheckValue(goCtx, msg.GetCharType(), msg.GetValue(), k.typeserviceKeeper)
		if err != nil {
			return nil, err
		}
		// purchasers pay the minimum price for a character
		err = k.bankKeeper.SendCoinsFromAccountToModule(ctx, GetAccount(msg.GetCreator()), types.ModuleName, CharacterMinPrice)
		if err != nil {
			return nil, err
		}
		// burn the appropriate amount of coins
		err = k.bankKeeper.BurnCoins(ctx, types.ModuleName, CharacterMinPrice)
		if err != nil {
			return nil, err
		}
		char.Creator = msg.GetCreator()
		char.Cost = CharacterMinPrice.String()
		char.Value = msg.GetValue()
		char.Ctype = msg.GetCharType()
		char.Index = preparedNewIndex
	}
	// update the character
	char.TradeRestricted = msg.GetTradeRestricted()
	char.Owner = msg.GetCreator()
	char.Name = msg.GetName()
	char.SaleTime = 0
	char.License = msg.GetLicense()

	k.SetCharacter(ctx, char)
	return &types.MsgBuyCharResponse{Index: char.Index}, nil
}
