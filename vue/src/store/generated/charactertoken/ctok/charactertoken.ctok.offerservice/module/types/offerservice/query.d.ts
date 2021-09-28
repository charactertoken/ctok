import { Reader, Writer } from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { OfferContract } from '../offerservice/offer_contract';
export declare const protobufPackage = "charactertoken.ctok.offerservice";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetAllCharOffersRequest {
    charId: string;
    pagination: PageRequest | undefined;
}
export interface QueryGetAllCharOffersResponse {
    OfferContract: OfferContract[];
    pagination: PageResponse | undefined;
}
export interface QueryGetOfferContractRequest {
    index: string;
}
export interface QueryGetOfferContractResponse {
    OfferContract: OfferContract | undefined;
}
export interface QueryAllOfferContractRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllOfferContractResponse {
    OfferContract: OfferContract[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetAllCharOffersRequest: {
    encode(message: QueryGetAllCharOffersRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharOffersRequest;
    fromJSON(object: any): QueryGetAllCharOffersRequest;
    toJSON(message: QueryGetAllCharOffersRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAllCharOffersRequest>): QueryGetAllCharOffersRequest;
};
export declare const QueryGetAllCharOffersResponse: {
    encode(message: QueryGetAllCharOffersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharOffersResponse;
    fromJSON(object: any): QueryGetAllCharOffersResponse;
    toJSON(message: QueryGetAllCharOffersResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAllCharOffersResponse>): QueryGetAllCharOffersResponse;
};
export declare const QueryGetOfferContractRequest: {
    encode(message: QueryGetOfferContractRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetOfferContractRequest;
    fromJSON(object: any): QueryGetOfferContractRequest;
    toJSON(message: QueryGetOfferContractRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetOfferContractRequest>): QueryGetOfferContractRequest;
};
export declare const QueryGetOfferContractResponse: {
    encode(message: QueryGetOfferContractResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetOfferContractResponse;
    fromJSON(object: any): QueryGetOfferContractResponse;
    toJSON(message: QueryGetOfferContractResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetOfferContractResponse>): QueryGetOfferContractResponse;
};
export declare const QueryAllOfferContractRequest: {
    encode(message: QueryAllOfferContractRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllOfferContractRequest;
    fromJSON(object: any): QueryAllOfferContractRequest;
    toJSON(message: QueryAllOfferContractRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllOfferContractRequest>): QueryAllOfferContractRequest;
};
export declare const QueryAllOfferContractResponse: {
    encode(message: QueryAllOfferContractResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllOfferContractResponse;
    fromJSON(object: any): QueryAllOfferContractResponse;
    toJSON(message: QueryAllOfferContractResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllOfferContractResponse>): QueryAllOfferContractResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a list of getAllCharOffers items. */
    GetAllCharOffers(request: QueryGetAllCharOffersRequest): Promise<QueryGetAllCharOffersResponse>;
    /** Queries a offerContract by index. */
    OfferContract(request: QueryGetOfferContractRequest): Promise<QueryGetOfferContractResponse>;
    /** Queries a list of offerContract items. */
    OfferContractAll(request: QueryAllOfferContractRequest): Promise<QueryAllOfferContractResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetAllCharOffers(request: QueryGetAllCharOffersRequest): Promise<QueryGetAllCharOffersResponse>;
    OfferContract(request: QueryGetOfferContractRequest): Promise<QueryGetOfferContractResponse>;
    OfferContractAll(request: QueryAllOfferContractRequest): Promise<QueryAllOfferContractResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
