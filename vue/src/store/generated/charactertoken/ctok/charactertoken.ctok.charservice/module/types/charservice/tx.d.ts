import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "charactertoken.ctok.charservice";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgUnlistSale {
    creator: string;
    index: string;
}
export interface MsgUnlistSaleResponse {
    index: string;
}
export interface MsgSetSale {
    creator: string;
    index: string;
    cost: string;
    saleTimeMinutes: number;
}
export interface MsgSetSaleResponse {
    index: string;
    saleEndTime: string;
}
export interface MsgBuyChar {
    tradeRestricted: boolean;
    saleTimeMinutes: number;
    creator: string;
    name: string;
    charType: string;
    cost: string;
    index: string;
    license: string;
    value: Uint8Array;
}
export interface MsgBuyCharResponse {
    index: string;
}
export declare const MsgUnlistSale: {
    encode(message: MsgUnlistSale, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnlistSale;
    fromJSON(object: any): MsgUnlistSale;
    toJSON(message: MsgUnlistSale): unknown;
    fromPartial(object: DeepPartial<MsgUnlistSale>): MsgUnlistSale;
};
export declare const MsgUnlistSaleResponse: {
    encode(message: MsgUnlistSaleResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnlistSaleResponse;
    fromJSON(object: any): MsgUnlistSaleResponse;
    toJSON(message: MsgUnlistSaleResponse): unknown;
    fromPartial(object: DeepPartial<MsgUnlistSaleResponse>): MsgUnlistSaleResponse;
};
export declare const MsgSetSale: {
    encode(message: MsgSetSale, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetSale;
    fromJSON(object: any): MsgSetSale;
    toJSON(message: MsgSetSale): unknown;
    fromPartial(object: DeepPartial<MsgSetSale>): MsgSetSale;
};
export declare const MsgSetSaleResponse: {
    encode(message: MsgSetSaleResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetSaleResponse;
    fromJSON(object: any): MsgSetSaleResponse;
    toJSON(message: MsgSetSaleResponse): unknown;
    fromPartial(object: DeepPartial<MsgSetSaleResponse>): MsgSetSaleResponse;
};
export declare const MsgBuyChar: {
    encode(message: MsgBuyChar, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyChar;
    fromJSON(object: any): MsgBuyChar;
    toJSON(message: MsgBuyChar): unknown;
    fromPartial(object: DeepPartial<MsgBuyChar>): MsgBuyChar;
};
export declare const MsgBuyCharResponse: {
    encode(message: MsgBuyCharResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyCharResponse;
    fromJSON(object: any): MsgBuyCharResponse;
    toJSON(message: MsgBuyCharResponse): unknown;
    fromPartial(object: DeepPartial<MsgBuyCharResponse>): MsgBuyCharResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    UnlistSale(request: MsgUnlistSale): Promise<MsgUnlistSaleResponse>;
    SetSale(request: MsgSetSale): Promise<MsgSetSaleResponse>;
    BuyChar(request: MsgBuyChar): Promise<MsgBuyCharResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UnlistSale(request: MsgUnlistSale): Promise<MsgUnlistSaleResponse>;
    SetSale(request: MsgSetSale): Promise<MsgSetSaleResponse>;
    BuyChar(request: MsgBuyChar): Promise<MsgBuyCharResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
