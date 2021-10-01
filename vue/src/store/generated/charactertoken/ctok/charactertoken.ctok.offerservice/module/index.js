// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateOffer } from "./types/offerservice/tx";
import { MsgAcceptOffer } from "./types/offerservice/tx";
const types = [
    ["/charactertoken.ctok.offerservice.MsgCreateOffer", MsgCreateOffer],
    ["/charactertoken.ctok.offerservice.MsgAcceptOffer", MsgAcceptOffer],
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
        msgCreateOffer: (data) => ({ typeUrl: "/charactertoken.ctok.offerservice.MsgCreateOffer", value: data }),
        msgAcceptOffer: (data) => ({ typeUrl: "/charactertoken.ctok.offerservice.MsgAcceptOffer", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
