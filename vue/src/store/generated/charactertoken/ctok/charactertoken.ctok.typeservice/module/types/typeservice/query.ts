/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Ctype } from '../typeservice/ctype'

export const protobufPackage = 'charactertoken.ctok.typeservice'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetAllTypesByNameRequest {
  name: string
  pagination: PageRequest | undefined
}

export interface QueryGetAllTypesByNameResponse {
  ctype: Ctype[]
  pagination: PageResponse | undefined
}

export interface QueryGetAllTypesByGroupRequest {
  group: string
  pagination: PageRequest | undefined
}

export interface QueryGetAllTypesByGroupResponse {
  ctype: Ctype[]
  pagination: PageResponse | undefined
}

export interface QueryGetCtypeRequest {
  index: string
}

export interface QueryGetCtypeResponse {
  Ctype: Ctype | undefined
}

export interface QueryAllCtypeRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllCtypeResponse {
  Ctype: Ctype[]
  pagination: PageResponse | undefined
}

const baseQueryGetAllTypesByNameRequest: object = { name: '' }

export const QueryGetAllTypesByNameRequest = {
  encode(message: QueryGetAllTypesByNameRequest, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllTypesByNameRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllTypesByNameRequest } as QueryGetAllTypesByNameRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
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

  fromJSON(object: any): QueryGetAllTypesByNameRequest {
    const message = { ...baseQueryGetAllTypesByNameRequest } as QueryGetAllTypesByNameRequest
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllTypesByNameRequest): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllTypesByNameRequest>): QueryGetAllTypesByNameRequest {
    const message = { ...baseQueryGetAllTypesByNameRequest } as QueryGetAllTypesByNameRequest
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetAllTypesByNameResponse: object = {}

export const QueryGetAllTypesByNameResponse = {
  encode(message: QueryGetAllTypesByNameResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.ctype) {
      Ctype.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllTypesByNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllTypesByNameResponse } as QueryGetAllTypesByNameResponse
    message.ctype = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ctype.push(Ctype.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryGetAllTypesByNameResponse {
    const message = { ...baseQueryGetAllTypesByNameResponse } as QueryGetAllTypesByNameResponse
    message.ctype = []
    if (object.ctype !== undefined && object.ctype !== null) {
      for (const e of object.ctype) {
        message.ctype.push(Ctype.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllTypesByNameResponse): unknown {
    const obj: any = {}
    if (message.ctype) {
      obj.ctype = message.ctype.map((e) => (e ? Ctype.toJSON(e) : undefined))
    } else {
      obj.ctype = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllTypesByNameResponse>): QueryGetAllTypesByNameResponse {
    const message = { ...baseQueryGetAllTypesByNameResponse } as QueryGetAllTypesByNameResponse
    message.ctype = []
    if (object.ctype !== undefined && object.ctype !== null) {
      for (const e of object.ctype) {
        message.ctype.push(Ctype.fromPartial(e))
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

const baseQueryGetAllTypesByGroupRequest: object = { group: '' }

export const QueryGetAllTypesByGroupRequest = {
  encode(message: QueryGetAllTypesByGroupRequest, writer: Writer = Writer.create()): Writer {
    if (message.group !== '') {
      writer.uint32(10).string(message.group)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllTypesByGroupRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllTypesByGroupRequest } as QueryGetAllTypesByGroupRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.group = reader.string()
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

  fromJSON(object: any): QueryGetAllTypesByGroupRequest {
    const message = { ...baseQueryGetAllTypesByGroupRequest } as QueryGetAllTypesByGroupRequest
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group)
    } else {
      message.group = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllTypesByGroupRequest): unknown {
    const obj: any = {}
    message.group !== undefined && (obj.group = message.group)
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllTypesByGroupRequest>): QueryGetAllTypesByGroupRequest {
    const message = { ...baseQueryGetAllTypesByGroupRequest } as QueryGetAllTypesByGroupRequest
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group
    } else {
      message.group = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetAllTypesByGroupResponse: object = {}

export const QueryGetAllTypesByGroupResponse = {
  encode(message: QueryGetAllTypesByGroupResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.ctype) {
      Ctype.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllTypesByGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllTypesByGroupResponse } as QueryGetAllTypesByGroupResponse
    message.ctype = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ctype.push(Ctype.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryGetAllTypesByGroupResponse {
    const message = { ...baseQueryGetAllTypesByGroupResponse } as QueryGetAllTypesByGroupResponse
    message.ctype = []
    if (object.ctype !== undefined && object.ctype !== null) {
      for (const e of object.ctype) {
        message.ctype.push(Ctype.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllTypesByGroupResponse): unknown {
    const obj: any = {}
    if (message.ctype) {
      obj.ctype = message.ctype.map((e) => (e ? Ctype.toJSON(e) : undefined))
    } else {
      obj.ctype = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllTypesByGroupResponse>): QueryGetAllTypesByGroupResponse {
    const message = { ...baseQueryGetAllTypesByGroupResponse } as QueryGetAllTypesByGroupResponse
    message.ctype = []
    if (object.ctype !== undefined && object.ctype !== null) {
      for (const e of object.ctype) {
        message.ctype.push(Ctype.fromPartial(e))
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

const baseQueryGetCtypeRequest: object = { index: '' }

export const QueryGetCtypeRequest = {
  encode(message: QueryGetCtypeRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCtypeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCtypeRequest } as QueryGetCtypeRequest
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

  fromJSON(object: any): QueryGetCtypeRequest {
    const message = { ...baseQueryGetCtypeRequest } as QueryGetCtypeRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetCtypeRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCtypeRequest>): QueryGetCtypeRequest {
    const message = { ...baseQueryGetCtypeRequest } as QueryGetCtypeRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetCtypeResponse: object = {}

export const QueryGetCtypeResponse = {
  encode(message: QueryGetCtypeResponse, writer: Writer = Writer.create()): Writer {
    if (message.Ctype !== undefined) {
      Ctype.encode(message.Ctype, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCtypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCtypeResponse } as QueryGetCtypeResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Ctype = Ctype.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCtypeResponse {
    const message = { ...baseQueryGetCtypeResponse } as QueryGetCtypeResponse
    if (object.Ctype !== undefined && object.Ctype !== null) {
      message.Ctype = Ctype.fromJSON(object.Ctype)
    } else {
      message.Ctype = undefined
    }
    return message
  },

  toJSON(message: QueryGetCtypeResponse): unknown {
    const obj: any = {}
    message.Ctype !== undefined && (obj.Ctype = message.Ctype ? Ctype.toJSON(message.Ctype) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCtypeResponse>): QueryGetCtypeResponse {
    const message = { ...baseQueryGetCtypeResponse } as QueryGetCtypeResponse
    if (object.Ctype !== undefined && object.Ctype !== null) {
      message.Ctype = Ctype.fromPartial(object.Ctype)
    } else {
      message.Ctype = undefined
    }
    return message
  }
}

const baseQueryAllCtypeRequest: object = {}

export const QueryAllCtypeRequest = {
  encode(message: QueryAllCtypeRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCtypeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCtypeRequest } as QueryAllCtypeRequest
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

  fromJSON(object: any): QueryAllCtypeRequest {
    const message = { ...baseQueryAllCtypeRequest } as QueryAllCtypeRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCtypeRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCtypeRequest>): QueryAllCtypeRequest {
    const message = { ...baseQueryAllCtypeRequest } as QueryAllCtypeRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllCtypeResponse: object = {}

export const QueryAllCtypeResponse = {
  encode(message: QueryAllCtypeResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Ctype) {
      Ctype.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCtypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCtypeResponse } as QueryAllCtypeResponse
    message.Ctype = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Ctype.push(Ctype.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllCtypeResponse {
    const message = { ...baseQueryAllCtypeResponse } as QueryAllCtypeResponse
    message.Ctype = []
    if (object.Ctype !== undefined && object.Ctype !== null) {
      for (const e of object.Ctype) {
        message.Ctype.push(Ctype.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCtypeResponse): unknown {
    const obj: any = {}
    if (message.Ctype) {
      obj.Ctype = message.Ctype.map((e) => (e ? Ctype.toJSON(e) : undefined))
    } else {
      obj.Ctype = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCtypeResponse>): QueryAllCtypeResponse {
    const message = { ...baseQueryAllCtypeResponse } as QueryAllCtypeResponse
    message.Ctype = []
    if (object.Ctype !== undefined && object.Ctype !== null) {
      for (const e of object.Ctype) {
        message.Ctype.push(Ctype.fromPartial(e))
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
  /** Queries a list of getAllTypesByName items. */
  GetAllTypesByName(request: QueryGetAllTypesByNameRequest): Promise<QueryGetAllTypesByNameResponse>
  /** Queries a list of getAllTypesByGroup items. */
  GetAllTypesByGroup(request: QueryGetAllTypesByGroupRequest): Promise<QueryGetAllTypesByGroupResponse>
  /** Queries a ctype by index. */
  Ctype(request: QueryGetCtypeRequest): Promise<QueryGetCtypeResponse>
  /** Queries a list of ctype items. */
  CtypeAll(request: QueryAllCtypeRequest): Promise<QueryAllCtypeResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  GetAllTypesByName(request: QueryGetAllTypesByNameRequest): Promise<QueryGetAllTypesByNameResponse> {
    const data = QueryGetAllTypesByNameRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.typeservice.Query', 'GetAllTypesByName', data)
    return promise.then((data) => QueryGetAllTypesByNameResponse.decode(new Reader(data)))
  }

  GetAllTypesByGroup(request: QueryGetAllTypesByGroupRequest): Promise<QueryGetAllTypesByGroupResponse> {
    const data = QueryGetAllTypesByGroupRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.typeservice.Query', 'GetAllTypesByGroup', data)
    return promise.then((data) => QueryGetAllTypesByGroupResponse.decode(new Reader(data)))
  }

  Ctype(request: QueryGetCtypeRequest): Promise<QueryGetCtypeResponse> {
    const data = QueryGetCtypeRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.typeservice.Query', 'Ctype', data)
    return promise.then((data) => QueryGetCtypeResponse.decode(new Reader(data)))
  }

  CtypeAll(request: QueryAllCtypeRequest): Promise<QueryAllCtypeResponse> {
    const data = QueryAllCtypeRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.typeservice.Query', 'CtypeAll', data)
    return promise.then((data) => QueryAllCtypeResponse.decode(new Reader(data)))
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
