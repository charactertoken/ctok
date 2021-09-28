import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "charactertoken.ctok.typeservice";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgBuyType {
    creator: string;
    name: string;
    language: string;
    schemaFile: Uint8Array;
    messageName: string;
    group: string;
}
export interface MsgBuyTypeResponse {
    index: string;
}
export declare const MsgBuyType: {
    encode(message: MsgBuyType, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyType;
    fromJSON(object: any): MsgBuyType;
    toJSON(message: MsgBuyType): unknown;
    fromPartial(object: DeepPartial<MsgBuyType>): MsgBuyType;
};
export declare const MsgBuyTypeResponse: {
    encode(message: MsgBuyTypeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyTypeResponse;
    fromJSON(object: any): MsgBuyTypeResponse;
    toJSON(message: MsgBuyTypeResponse): unknown;
    fromPartial(object: DeepPartial<MsgBuyTypeResponse>): MsgBuyTypeResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    BuyType(request: MsgBuyType): Promise<MsgBuyTypeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    BuyType(request: MsgBuyType): Promise<MsgBuyTypeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
