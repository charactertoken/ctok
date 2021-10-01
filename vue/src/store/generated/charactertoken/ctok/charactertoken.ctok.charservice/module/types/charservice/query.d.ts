import { Reader, Writer } from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Character } from '../charservice/character';
export declare const protobufPackage = "charactertoken.ctok.charservice";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetAllCharsByCreatorRequest {
    creator: string;
    pagination: PageRequest | undefined;
}
export interface QueryGetAllCharsByCreatorResponse {
    Character: Character[];
    pagination: PageResponse | undefined;
}
export interface QueryGetCharByNameRequest {
    pagination: PageRequest | undefined;
    name: string;
}
export interface QueryGetCharByNameResponse {
    Character: Character[];
    pagination: PageResponse | undefined;
}
export interface QueryGetAllCharsForSaleRequest {
    pagination: PageRequest | undefined;
}
export interface QueryGetAllCharsForSaleResponse {
    Character: Character[];
    pagination: PageResponse | undefined;
}
export interface QueryGetAllCharsOfTypeRequest {
    ctype: string;
    pagination: PageRequest | undefined;
}
export interface QueryGetAllCharsOfTypeResponse {
    Character: Character[];
    pagination: PageResponse | undefined;
}
export interface QueryGetAllCharsOfOwnerRequest {
    owner: string;
    pagination: PageRequest | undefined;
}
export interface QueryGetAllCharsOfOwnerResponse {
    Character: Character[];
    pagination: PageResponse | undefined;
}
export interface QueryGetCharacterRequest {
    index: string;
}
export interface QueryGetCharacterResponse {
    Character: Character | undefined;
}
export interface QueryAllCharacterRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCharacterResponse {
    Character: Character[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetAllCharsByCreatorRequest: {
    encode(message: QueryGetAllCharsByCreatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsByCreatorRequest;
    fromJSON(object: any): QueryGetAllCharsByCreatorRequest;
    toJSON(message: QueryGetAllCharsByCreatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAllCharsByCreatorRequest>): QueryGetAllCharsByCreatorRequest;
};
export declare const QueryGetAllCharsByCreatorResponse: {
    encode(message: QueryGetAllCharsByCreatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsByCreatorResponse;
    fromJSON(object: any): QueryGetAllCharsByCreatorResponse;
    toJSON(message: QueryGetAllCharsByCreatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAllCharsByCreatorResponse>): QueryGetAllCharsByCreatorResponse;
};
export declare const QueryGetCharByNameRequest: {
    encode(message: QueryGetCharByNameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCharByNameRequest;
    fromJSON(object: any): QueryGetCharByNameRequest;
    toJSON(message: QueryGetCharByNameRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCharByNameRequest>): QueryGetCharByNameRequest;
};
export declare const QueryGetCharByNameResponse: {
    encode(message: QueryGetCharByNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCharByNameResponse;
    fromJSON(object: any): QueryGetCharByNameResponse;
    toJSON(message: QueryGetCharByNameResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCharByNameResponse>): QueryGetCharByNameResponse;
};
export declare const QueryGetAllCharsForSaleRequest: {
    encode(message: QueryGetAllCharsForSaleRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsForSaleRequest;
    fromJSON(object: any): QueryGetAllCharsForSaleRequest;
    toJSON(message: QueryGetAllCharsForSaleRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAllCharsForSaleRequest>): QueryGetAllCharsForSaleRequest;
};
export declare const QueryGetAllCharsForSaleResponse: {
    encode(message: QueryGetAllCharsForSaleResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsForSaleResponse;
    fromJSON(object: any): QueryGetAllCharsForSaleResponse;
    toJSON(message: QueryGetAllCharsForSaleResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAllCharsForSaleResponse>): QueryGetAllCharsForSaleResponse;
};
export declare const QueryGetAllCharsOfTypeRequest: {
    encode(message: QueryGetAllCharsOfTypeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsOfTypeRequest;
    fromJSON(object: any): QueryGetAllCharsOfTypeRequest;
    toJSON(message: QueryGetAllCharsOfTypeRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAllCharsOfTypeRequest>): QueryGetAllCharsOfTypeRequest;
};
export declare const QueryGetAllCharsOfTypeResponse: {
    encode(message: QueryGetAllCharsOfTypeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsOfTypeResponse;
    fromJSON(object: any): QueryGetAllCharsOfTypeResponse;
    toJSON(message: QueryGetAllCharsOfTypeResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAllCharsOfTypeResponse>): QueryGetAllCharsOfTypeResponse;
};
export declare const QueryGetAllCharsOfOwnerRequest: {
    encode(message: QueryGetAllCharsOfOwnerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsOfOwnerRequest;
    fromJSON(object: any): QueryGetAllCharsOfOwnerRequest;
    toJSON(message: QueryGetAllCharsOfOwnerRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAllCharsOfOwnerRequest>): QueryGetAllCharsOfOwnerRequest;
};
export declare const QueryGetAllCharsOfOwnerResponse: {
    encode(message: QueryGetAllCharsOfOwnerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsOfOwnerResponse;
    fromJSON(object: any): QueryGetAllCharsOfOwnerResponse;
    toJSON(message: QueryGetAllCharsOfOwnerResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAllCharsOfOwnerResponse>): QueryGetAllCharsOfOwnerResponse;
};
export declare const QueryGetCharacterRequest: {
    encode(message: QueryGetCharacterRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCharacterRequest;
    fromJSON(object: any): QueryGetCharacterRequest;
    toJSON(message: QueryGetCharacterRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCharacterRequest>): QueryGetCharacterRequest;
};
export declare const QueryGetCharacterResponse: {
    encode(message: QueryGetCharacterResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCharacterResponse;
    fromJSON(object: any): QueryGetCharacterResponse;
    toJSON(message: QueryGetCharacterResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCharacterResponse>): QueryGetCharacterResponse;
};
export declare const QueryAllCharacterRequest: {
    encode(message: QueryAllCharacterRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCharacterRequest;
    fromJSON(object: any): QueryAllCharacterRequest;
    toJSON(message: QueryAllCharacterRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCharacterRequest>): QueryAllCharacterRequest;
};
export declare const QueryAllCharacterResponse: {
    encode(message: QueryAllCharacterResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCharacterResponse;
    fromJSON(object: any): QueryAllCharacterResponse;
    toJSON(message: QueryAllCharacterResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCharacterResponse>): QueryAllCharacterResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a list of getAllCharsByCreator items. */
    GetAllCharsByCreator(request: QueryGetAllCharsByCreatorRequest): Promise<QueryGetAllCharsByCreatorResponse>;
    /** Queries a list of getCharByName items. */
    GetCharByName(request: QueryGetCharByNameRequest): Promise<QueryGetCharByNameResponse>;
    /** Queries a list of getAllCharsForSale items. */
    GetAllCharsForSale(request: QueryGetAllCharsForSaleRequest): Promise<QueryGetAllCharsForSaleResponse>;
    /** Queries a list of getAllCharsOfType items. */
    GetAllCharsOfType(request: QueryGetAllCharsOfTypeRequest): Promise<QueryGetAllCharsOfTypeResponse>;
    /** Queries a list of getAllCharsOfOwner items. */
    GetAllCharsOfOwner(request: QueryGetAllCharsOfOwnerRequest): Promise<QueryGetAllCharsOfOwnerResponse>;
    /** Queries a character by index. */
    Character(request: QueryGetCharacterRequest): Promise<QueryGetCharacterResponse>;
    /** Queries a list of character items. */
    CharacterAll(request: QueryAllCharacterRequest): Promise<QueryAllCharacterResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetAllCharsByCreator(request: QueryGetAllCharsByCreatorRequest): Promise<QueryGetAllCharsByCreatorResponse>;
    GetCharByName(request: QueryGetCharByNameRequest): Promise<QueryGetCharByNameResponse>;
    GetAllCharsForSale(request: QueryGetAllCharsForSaleRequest): Promise<QueryGetAllCharsForSaleResponse>;
    GetAllCharsOfType(request: QueryGetAllCharsOfTypeRequest): Promise<QueryGetAllCharsOfTypeResponse>;
    GetAllCharsOfOwner(request: QueryGetAllCharsOfOwnerRequest): Promise<QueryGetAllCharsOfOwnerResponse>;
    Character(request: QueryGetCharacterRequest): Promise<QueryGetCharacterResponse>;
    CharacterAll(request: QueryAllCharacterRequest): Promise<QueryAllCharacterResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
