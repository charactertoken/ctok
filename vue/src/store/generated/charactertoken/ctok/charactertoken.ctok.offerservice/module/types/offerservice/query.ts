/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { OfferContract } from '../offerservice/offer_contract'

export const protobufPackage = 'charactertoken.ctok.offerservice'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetAllCharOffersRequest {
  charId: string
  pagination: PageRequest | undefined
}

export interface QueryGetAllCharOffersResponse {
  OfferContract: OfferContract[]
  pagination: PageResponse | undefined
}

export interface QueryGetOfferContractRequest {
  index: string
}

export interface QueryGetOfferContractResponse {
  OfferContract: OfferContract | undefined
}

export interface QueryAllOfferContractRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllOfferContractResponse {
  OfferContract: OfferContract[]
  pagination: PageResponse | undefined
}

const baseQueryGetAllCharOffersRequest: object = { charId: '' }

export const QueryGetAllCharOffersRequest = {
  encode(message: QueryGetAllCharOffersRequest, writer: Writer = Writer.create()): Writer {
    if (message.charId !== '') {
      writer.uint32(10).string(message.charId)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharOffersRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllCharOffersRequest } as QueryGetAllCharOffersRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.charId = reader.string()
          break
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetAllCharOffersRequest {
    const message = { ...baseQueryGetAllCharOffersRequest } as QueryGetAllCharOffersRequest
    if (object.charId !== undefined && object.charId !== null) {
      message.charId = String(object.charId)
    } else {
      message.charId = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllCharOffersRequest): unknown {
    const obj: any = {}
    message.charId !== undefined && (obj.charId = message.charId)
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllCharOffersRequest>): QueryGetAllCharOffersRequest {
    const message = { ...baseQueryGetAllCharOffersRequest } as QueryGetAllCharOffersRequest
    if (object.charId !== undefined && object.charId !== null) {
      message.charId = object.charId
    } else {
      message.charId = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetAllCharOffersResponse: object = {}

export const QueryGetAllCharOffersResponse = {
  encode(message: QueryGetAllCharOffersResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.OfferContract) {
      OfferContract.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharOffersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllCharOffersResponse } as QueryGetAllCharOffersResponse
    message.OfferContract = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.OfferContract.push(OfferContract.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetAllCharOffersResponse {
    const message = { ...baseQueryGetAllCharOffersResponse } as QueryGetAllCharOffersResponse
    message.OfferContract = []
    if (object.OfferContract !== undefined && object.OfferContract !== null) {
      for (const e of object.OfferContract) {
        message.OfferContract.push(OfferContract.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllCharOffersResponse): unknown {
    const obj: any = {}
    if (message.OfferContract) {
      obj.OfferContract = message.OfferContract.map((e) => (e ? OfferContract.toJSON(e) : undefined))
    } else {
      obj.OfferContract = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllCharOffersResponse>): QueryGetAllCharOffersResponse {
    const message = { ...baseQueryGetAllCharOffersResponse } as QueryGetAllCharOffersResponse
    message.OfferContract = []
    if (object.OfferContract !== undefined && object.OfferContract !== null) {
      for (const e of object.OfferContract) {
        message.OfferContract.push(OfferContract.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetOfferContractRequest: object = { index: '' }

export const QueryGetOfferContractRequest = {
  encode(message: QueryGetOfferContractRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOfferContractRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetOfferContractRequest } as QueryGetOfferContractRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetOfferContractRequest {
    const message = { ...baseQueryGetOfferContractRequest } as QueryGetOfferContractRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetOfferContractRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetOfferContractRequest>): QueryGetOfferContractRequest {
    const message = { ...baseQueryGetOfferContractRequest } as QueryGetOfferContractRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetOfferContractResponse: object = {}

export const QueryGetOfferContractResponse = {
  encode(message: QueryGetOfferContractResponse, writer: Writer = Writer.create()): Writer {
    if (message.OfferContract !== undefined) {
      OfferContract.encode(message.OfferContract, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOfferContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetOfferContractResponse } as QueryGetOfferContractResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.OfferContract = OfferContract.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetOfferContractResponse {
    const message = { ...baseQueryGetOfferContractResponse } as QueryGetOfferContractResponse
    if (object.OfferContract !== undefined && object.OfferContract !== null) {
      message.OfferContract = OfferContract.fromJSON(object.OfferContract)
    } else {
      message.OfferContract = undefined
    }
    return message
  },

  toJSON(message: QueryGetOfferContractResponse): unknown {
    const obj: any = {}
    message.OfferContract !== undefined && (obj.OfferContract = message.OfferContract ? OfferContract.toJSON(message.OfferContract) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetOfferContractResponse>): QueryGetOfferContractResponse {
    const message = { ...baseQueryGetOfferContractResponse } as QueryGetOfferContractResponse
    if (object.OfferContract !== undefined && object.OfferContract !== null) {
      message.OfferContract = OfferContract.fromPartial(object.OfferContract)
    } else {
      message.OfferContract = undefined
    }
    return message
  }
}

const baseQueryAllOfferContractRequest: object = {}

export const QueryAllOfferContractRequest = {
  encode(message: QueryAllOfferContractRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOfferContractRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllOfferContractRequest } as QueryAllOfferContractRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllOfferContractRequest {
    const message = { ...baseQueryAllOfferContractRequest } as QueryAllOfferContractRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllOfferContractRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllOfferContractRequest>): QueryAllOfferContractRequest {
    const message = { ...baseQueryAllOfferContractRequest } as QueryAllOfferContractRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllOfferContractResponse: object = {}

export const QueryAllOfferContractResponse = {
  encode(message: QueryAllOfferContractResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.OfferContract) {
      OfferContract.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOfferContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllOfferContractResponse } as QueryAllOfferContractResponse
    message.OfferContract = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.OfferContract.push(OfferContract.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllOfferContractResponse {
    const message = { ...baseQueryAllOfferContractResponse } as QueryAllOfferContractResponse
    message.OfferContract = []
    if (object.OfferContract !== undefined && object.OfferContract !== null) {
      for (const e of object.OfferContract) {
        message.OfferContract.push(OfferContract.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllOfferContractResponse): unknown {
    const obj: any = {}
    if (message.OfferContract) {
      obj.OfferContract = message.OfferContract.map((e) => (e ? OfferContract.toJSON(e) : undefined))
    } else {
      obj.OfferContract = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllOfferContractResponse>): QueryAllOfferContractResponse {
    const message = { ...baseQueryAllOfferContractResponse } as QueryAllOfferContractResponse
    message.OfferContract = []
    if (object.OfferContract !== undefined && object.OfferContract !== null) {
      for (const e of object.OfferContract) {
        message.OfferContract.push(OfferContract.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of getAllCharOffers items. */
  GetAllCharOffers(request: QueryGetAllCharOffersRequest): Promise<QueryGetAllCharOffersResponse>
  /** Queries a offerContract by index. */
  OfferContract(request: QueryGetOfferContractRequest): Promise<QueryGetOfferContractResponse>
  /** Queries a list of offerContract items. */
  OfferContractAll(request: QueryAllOfferContractRequest): Promise<QueryAllOfferContractResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  GetAllCharOffers(request: QueryGetAllCharOffersRequest): Promise<QueryGetAllCharOffersResponse> {
    const data = QueryGetAllCharOffersRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.offerservice.Query', 'GetAllCharOffers', data)
    return promise.then((data) => QueryGetAllCharOffersResponse.decode(new Reader(data)))
  }

  OfferContract(request: QueryGetOfferContractRequest): Promise<QueryGetOfferContractResponse> {
    const data = QueryGetOfferContractRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.offerservice.Query', 'OfferContract', data)
    return promise.then((data) => QueryGetOfferContractResponse.decode(new Reader(data)))
  }

  OfferContractAll(request: QueryAllOfferContractRequest): Promise<QueryAllOfferContractResponse> {
    const data = QueryAllOfferContractRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.offerservice.Query', 'OfferContractAll', data)
    return promise.then((data) => QueryAllOfferContractResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
