// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBuyChar } from "./types/charservice/tx";
import { MsgUnlistSale } from "./types/charservice/tx";
import { MsgSetSale } from "./types/charservice/tx";


const types = [
  ["/charactertoken.ctok.charservice.MsgBuyChar", MsgBuyChar],
  ["/charactertoken.ctok.charservice.MsgUnlistSale", MsgUnlistSale],
  ["/charactertoken.ctok.charservice.MsgSetSale", MsgSetSale],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgBuyChar: (data: MsgBuyChar): EncodeObject => ({ typeUrl: "/charactertoken.ctok.charservice.MsgBuyChar", value: data }),
    msgUnlistSale: (data: MsgUnlistSale): EncodeObject => ({ typeUrl: "/charactertoken.ctok.charservice.MsgUnlistSale", value: data }),
    msgSetSale: (data: MsgSetSale): EncodeObject => ({ typeUrl: "/charactertoken.ctok.charservice.MsgSetSale", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
