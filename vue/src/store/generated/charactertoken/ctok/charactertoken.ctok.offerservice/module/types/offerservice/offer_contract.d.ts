import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "charactertoken.ctok.offerservice";
export interface OfferContract {
    expiresAt: number;
    creator: string;
    index: string;
    charId: string;
    value: string;
}
export declare const OfferContract: {
    encode(message: OfferContract, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): OfferContract;
    fromJSON(object: any): OfferContract;
    toJSON(message: OfferContract): unknown;
    fromPartial(object: DeepPartial<OfferContract>): OfferContract;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
