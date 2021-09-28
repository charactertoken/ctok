import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "charactertoken.ctok.typeservice";
export interface Ctype {
    creator: string;
    index: string;
    name: string;
    language: string;
    schemaFile: Uint8Array;
    messageName: string;
    group: string;
}
export declare const Ctype: {
    encode(message: Ctype, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Ctype;
    fromJSON(object: any): Ctype;
    toJSON(message: Ctype): unknown;
    fromPartial(object: DeepPartial<Ctype>): Ctype;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
