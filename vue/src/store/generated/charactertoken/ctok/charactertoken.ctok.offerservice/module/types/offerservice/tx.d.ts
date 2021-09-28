import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "charactertoken.ctok.offerservice";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgAcceptOffer {
    creator: string;
    offerId: string;
}
export interface MsgAcceptOfferResponse {
    offerId: string;
    charId: string;
    salePrice: string;
}
export interface MsgCreateOffer {
    expireInMinutes: number;
    creator: string;
    bid: string;
    charId: string;
}
export interface MsgCreateOfferResponse {
    index: string;
}
export declare const MsgAcceptOffer: {
    encode(message: MsgAcceptOffer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAcceptOffer;
    fromJSON(object: any): MsgAcceptOffer;
    toJSON(message: MsgAcceptOffer): unknown;
    fromPartial(object: DeepPartial<MsgAcceptOffer>): MsgAcceptOffer;
};
export declare const MsgAcceptOfferResponse: {
    encode(message: MsgAcceptOfferResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAcceptOfferResponse;
    fromJSON(object: any): MsgAcceptOfferResponse;
    toJSON(message: MsgAcceptOfferResponse): unknown;
    fromPartial(object: DeepPartial<MsgAcceptOfferResponse>): MsgAcceptOfferResponse;
};
export declare const MsgCreateOffer: {
    encode(message: MsgCreateOffer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateOffer;
    fromJSON(object: any): MsgCreateOffer;
    toJSON(message: MsgCreateOffer): unknown;
    fromPartial(object: DeepPartial<MsgCreateOffer>): MsgCreateOffer;
};
export declare const MsgCreateOfferResponse: {
    encode(message: MsgCreateOfferResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateOfferResponse;
    fromJSON(object: any): MsgCreateOfferResponse;
    toJSON(message: MsgCreateOfferResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateOfferResponse>): MsgCreateOfferResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    AcceptOffer(request: MsgAcceptOffer): Promise<MsgAcceptOfferResponse>;
    CreateOffer(request: MsgCreateOffer): Promise<MsgCreateOfferResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    AcceptOffer(request: MsgAcceptOffer): Promise<MsgAcceptOfferResponse>;
    CreateOffer(request: MsgCreateOffer): Promise<MsgCreateOfferResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
