import { Reader, Writer } from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Ctype } from '../typeservice/ctype';
export declare const protobufPackage = "charactertoken.ctok.typeservice";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetAllTypesByNameRequest {
    name: string;
    pagination: PageRequest | undefined;
}
export interface QueryGetAllTypesByNameResponse {
    ctype: Ctype[];
    pagination: PageResponse | undefined;
}
export interface QueryGetAllTypesByGroupRequest {
    group: string;
    pagination: PageRequest | undefined;
}
export interface QueryGetAllTypesByGroupResponse {
    ctype: Ctype[];
    pagination: PageResponse | undefined;
}
export interface QueryGetCtypeRequest {
    index: string;
}
export interface QueryGetCtypeResponse {
    Ctype: Ctype | undefined;
}
export interface QueryAllCtypeRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCtypeResponse {
    Ctype: Ctype[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetAllTypesByNameRequest: {
    encode(message: QueryGetAllTypesByNameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllTypesByNameRequest;
    fromJSON(object: any): QueryGetAllTypesByNameRequest;
    toJSON(message: QueryGetAllTypesByNameRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAllTypesByNameRequest>): QueryGetAllTypesByNameRequest;
};
export declare const QueryGetAllTypesByNameResponse: {
    encode(message: QueryGetAllTypesByNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllTypesByNameResponse;
    fromJSON(object: any): QueryGetAllTypesByNameResponse;
    toJSON(message: QueryGetAllTypesByNameResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAllTypesByNameResponse>): QueryGetAllTypesByNameResponse;
};
export declare const QueryGetAllTypesByGroupRequest: {
    encode(message: QueryGetAllTypesByGroupRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllTypesByGroupRequest;
    fromJSON(object: any): QueryGetAllTypesByGroupRequest;
    toJSON(message: QueryGetAllTypesByGroupRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAllTypesByGroupRequest>): QueryGetAllTypesByGroupRequest;
};
export declare const QueryGetAllTypesByGroupResponse: {
    encode(message: QueryGetAllTypesByGroupResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllTypesByGroupResponse;
    fromJSON(object: any): QueryGetAllTypesByGroupResponse;
    toJSON(message: QueryGetAllTypesByGroupResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAllTypesByGroupResponse>): QueryGetAllTypesByGroupResponse;
};
export declare const QueryGetCtypeRequest: {
    encode(message: QueryGetCtypeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCtypeRequest;
    fromJSON(object: any): QueryGetCtypeRequest;
    toJSON(message: QueryGetCtypeRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCtypeRequest>): QueryGetCtypeRequest;
};
export declare const QueryGetCtypeResponse: {
    encode(message: QueryGetCtypeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCtypeResponse;
    fromJSON(object: any): QueryGetCtypeResponse;
    toJSON(message: QueryGetCtypeResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCtypeResponse>): QueryGetCtypeResponse;
};
export declare const QueryAllCtypeRequest: {
    encode(message: QueryAllCtypeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCtypeRequest;
    fromJSON(object: any): QueryAllCtypeRequest;
    toJSON(message: QueryAllCtypeRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCtypeRequest>): QueryAllCtypeRequest;
};
export declare const QueryAllCtypeResponse: {
    encode(message: QueryAllCtypeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCtypeResponse;
    fromJSON(object: any): QueryAllCtypeResponse;
    toJSON(message: QueryAllCtypeResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCtypeResponse>): QueryAllCtypeResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a list of getAllTypesByName items. */
    GetAllTypesByName(request: QueryGetAllTypesByNameRequest): Promise<QueryGetAllTypesByNameResponse>;
    /** Queries a list of getAllTypesByGroup items. */
    GetAllTypesByGroup(request: QueryGetAllTypesByGroupRequest): Promise<QueryGetAllTypesByGroupResponse>;
    /** Queries a ctype by index. */
    Ctype(request: QueryGetCtypeRequest): Promise<QueryGetCtypeResponse>;
    /** Queries a list of ctype items. */
    CtypeAll(request: QueryAllCtypeRequest): Promise<QueryAllCtypeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetAllTypesByName(request: QueryGetAllTypesByNameRequest): Promise<QueryGetAllTypesByNameResponse>;
    GetAllTypesByGroup(request: QueryGetAllTypesByGroupRequest): Promise<QueryGetAllTypesByGroupResponse>;
    Ctype(request: QueryGetCtypeRequest): Promise<QueryGetCtypeResponse>;
    CtypeAll(request: QueryAllCtypeRequest): Promise<QueryAllCtypeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
