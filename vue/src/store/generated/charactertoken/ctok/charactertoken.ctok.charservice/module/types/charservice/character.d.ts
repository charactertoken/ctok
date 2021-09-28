import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "charactertoken.ctok.charservice";
export interface Character {
    tradeRestricted: boolean;
    saleTime: number;
    creator: string;
    index: string;
    name: string;
    owner: string;
    ctype: string;
    cost: string;
    license: string;
    value: Uint8Array;
}
export declare const Character: {
    encode(message: Character, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Character;
    fromJSON(object: any): Character;
    toJSON(message: Character): unknown;
    fromPartial(object: DeepPartial<Character>): Character;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
