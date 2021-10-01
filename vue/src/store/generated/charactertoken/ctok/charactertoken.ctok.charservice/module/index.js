// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUnlistSale } from "./types/charservice/tx";
import { MsgSetSale } from "./types/charservice/tx";
import { MsgBuyChar } from "./types/charservice/tx";
const types = [
    ["/charactertoken.ctok.charservice.MsgUnlistSale", MsgUnlistSale],
    ["/charactertoken.ctok.charservice.MsgSetSale", MsgSetSale],
    ["/charactertoken.ctok.charservice.MsgBuyChar", MsgBuyChar],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUnlistSale: (data) => ({ typeUrl: "/charactertoken.ctok.charservice.MsgUnlistSale", value: data }),
        msgSetSale: (data) => ({ typeUrl: "/charactertoken.ctok.charservice.MsgSetSale", value: data }),
        msgBuyChar: (data) => ({ typeUrl: "/charactertoken.ctok.charservice.MsgBuyChar", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
