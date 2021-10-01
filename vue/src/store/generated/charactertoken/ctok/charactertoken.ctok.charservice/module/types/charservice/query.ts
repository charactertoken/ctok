/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Character } from '../charservice/character'

export const protobufPackage = 'charactertoken.ctok.charservice'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetAllCharsByCreatorRequest {
  creator: string
  pagination: PageRequest | undefined
}

export interface QueryGetAllCharsByCreatorResponse {
  Character: Character[]
  pagination: PageResponse | undefined
}

export interface QueryGetCharByNameRequest {
  pagination: PageRequest | undefined
  name: string
}

export interface QueryGetCharByNameResponse {
  Character: Character[]
  pagination: PageResponse | undefined
}

export interface QueryGetAllCharsForSaleRequest {
  pagination: PageRequest | undefined
}

export interface QueryGetAllCharsForSaleResponse {
  Character: Character[]
  pagination: PageResponse | undefined
}

export interface QueryGetAllCharsOfTypeRequest {
  ctype: string
  pagination: PageRequest | undefined
}

export interface QueryGetAllCharsOfTypeResponse {
  Character: Character[]
  pagination: PageResponse | undefined
}

export interface QueryGetAllCharsOfOwnerRequest {
  owner: string
  pagination: PageRequest | undefined
}

export interface QueryGetAllCharsOfOwnerResponse {
  Character: Character[]
  pagination: PageResponse | undefined
}

export interface QueryGetCharacterRequest {
  index: string
}

export interface QueryGetCharacterResponse {
  Character: Character | undefined
}

export interface QueryAllCharacterRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllCharacterResponse {
  Character: Character[]
  pagination: PageResponse | undefined
}

const baseQueryGetAllCharsByCreatorRequest: object = { creator: '' }

export const QueryGetAllCharsByCreatorRequest = {
  encode(message: QueryGetAllCharsByCreatorRequest, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsByCreatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllCharsByCreatorRequest } as QueryGetAllCharsByCreatorRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
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

  fromJSON(object: any): QueryGetAllCharsByCreatorRequest {
    const message = { ...baseQueryGetAllCharsByCreatorRequest } as QueryGetAllCharsByCreatorRequest
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllCharsByCreatorRequest): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllCharsByCreatorRequest>): QueryGetAllCharsByCreatorRequest {
    const message = { ...baseQueryGetAllCharsByCreatorRequest } as QueryGetAllCharsByCreatorRequest
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetAllCharsByCreatorResponse: object = {}

export const QueryGetAllCharsByCreatorResponse = {
  encode(message: QueryGetAllCharsByCreatorResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Character) {
      Character.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsByCreatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllCharsByCreatorResponse } as QueryGetAllCharsByCreatorResponse
    message.Character = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Character.push(Character.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryGetAllCharsByCreatorResponse {
    const message = { ...baseQueryGetAllCharsByCreatorResponse } as QueryGetAllCharsByCreatorResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllCharsByCreatorResponse): unknown {
    const obj: any = {}
    if (message.Character) {
      obj.Character = message.Character.map((e) => (e ? Character.toJSON(e) : undefined))
    } else {
      obj.Character = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllCharsByCreatorResponse>): QueryGetAllCharsByCreatorResponse {
    const message = { ...baseQueryGetAllCharsByCreatorResponse } as QueryGetAllCharsByCreatorResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromPartial(e))
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

const baseQueryGetCharByNameRequest: object = { name: '' }

export const QueryGetCharByNameRequest = {
  encode(message: QueryGetCharByNameRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCharByNameRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCharByNameRequest } as QueryGetCharByNameRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        case 2:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCharByNameRequest {
    const message = { ...baseQueryGetCharByNameRequest } as QueryGetCharByNameRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    return message
  },

  toJSON(message: QueryGetCharByNameRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCharByNameRequest>): QueryGetCharByNameRequest {
    const message = { ...baseQueryGetCharByNameRequest } as QueryGetCharByNameRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    return message
  }
}

const baseQueryGetCharByNameResponse: object = {}

export const QueryGetCharByNameResponse = {
  encode(message: QueryGetCharByNameResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Character) {
      Character.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCharByNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCharByNameResponse } as QueryGetCharByNameResponse
    message.Character = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Character.push(Character.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryGetCharByNameResponse {
    const message = { ...baseQueryGetCharByNameResponse } as QueryGetCharByNameResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetCharByNameResponse): unknown {
    const obj: any = {}
    if (message.Character) {
      obj.Character = message.Character.map((e) => (e ? Character.toJSON(e) : undefined))
    } else {
      obj.Character = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCharByNameResponse>): QueryGetCharByNameResponse {
    const message = { ...baseQueryGetCharByNameResponse } as QueryGetCharByNameResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromPartial(e))
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

const baseQueryGetAllCharsForSaleRequest: object = {}

export const QueryGetAllCharsForSaleRequest = {
  encode(message: QueryGetAllCharsForSaleRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsForSaleRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllCharsForSaleRequest } as QueryGetAllCharsForSaleRequest
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

  fromJSON(object: any): QueryGetAllCharsForSaleRequest {
    const message = { ...baseQueryGetAllCharsForSaleRequest } as QueryGetAllCharsForSaleRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllCharsForSaleRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllCharsForSaleRequest>): QueryGetAllCharsForSaleRequest {
    const message = { ...baseQueryGetAllCharsForSaleRequest } as QueryGetAllCharsForSaleRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetAllCharsForSaleResponse: object = {}

export const QueryGetAllCharsForSaleResponse = {
  encode(message: QueryGetAllCharsForSaleResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Character) {
      Character.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsForSaleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllCharsForSaleResponse } as QueryGetAllCharsForSaleResponse
    message.Character = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Character.push(Character.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryGetAllCharsForSaleResponse {
    const message = { ...baseQueryGetAllCharsForSaleResponse } as QueryGetAllCharsForSaleResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllCharsForSaleResponse): unknown {
    const obj: any = {}
    if (message.Character) {
      obj.Character = message.Character.map((e) => (e ? Character.toJSON(e) : undefined))
    } else {
      obj.Character = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllCharsForSaleResponse>): QueryGetAllCharsForSaleResponse {
    const message = { ...baseQueryGetAllCharsForSaleResponse } as QueryGetAllCharsForSaleResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromPartial(e))
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

const baseQueryGetAllCharsOfTypeRequest: object = { ctype: '' }

export const QueryGetAllCharsOfTypeRequest = {
  encode(message: QueryGetAllCharsOfTypeRequest, writer: Writer = Writer.create()): Writer {
    if (message.ctype !== '') {
      writer.uint32(10).string(message.ctype)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsOfTypeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllCharsOfTypeRequest } as QueryGetAllCharsOfTypeRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ctype = reader.string()
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

  fromJSON(object: any): QueryGetAllCharsOfTypeRequest {
    const message = { ...baseQueryGetAllCharsOfTypeRequest } as QueryGetAllCharsOfTypeRequest
    if (object.ctype !== undefined && object.ctype !== null) {
      message.ctype = String(object.ctype)
    } else {
      message.ctype = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllCharsOfTypeRequest): unknown {
    const obj: any = {}
    message.ctype !== undefined && (obj.ctype = message.ctype)
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllCharsOfTypeRequest>): QueryGetAllCharsOfTypeRequest {
    const message = { ...baseQueryGetAllCharsOfTypeRequest } as QueryGetAllCharsOfTypeRequest
    if (object.ctype !== undefined && object.ctype !== null) {
      message.ctype = object.ctype
    } else {
      message.ctype = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetAllCharsOfTypeResponse: object = {}

export const QueryGetAllCharsOfTypeResponse = {
  encode(message: QueryGetAllCharsOfTypeResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Character) {
      Character.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsOfTypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllCharsOfTypeResponse } as QueryGetAllCharsOfTypeResponse
    message.Character = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Character.push(Character.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryGetAllCharsOfTypeResponse {
    const message = { ...baseQueryGetAllCharsOfTypeResponse } as QueryGetAllCharsOfTypeResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllCharsOfTypeResponse): unknown {
    const obj: any = {}
    if (message.Character) {
      obj.Character = message.Character.map((e) => (e ? Character.toJSON(e) : undefined))
    } else {
      obj.Character = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllCharsOfTypeResponse>): QueryGetAllCharsOfTypeResponse {
    const message = { ...baseQueryGetAllCharsOfTypeResponse } as QueryGetAllCharsOfTypeResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromPartial(e))
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

const baseQueryGetAllCharsOfOwnerRequest: object = { owner: '' }

export const QueryGetAllCharsOfOwnerRequest = {
  encode(message: QueryGetAllCharsOfOwnerRequest, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsOfOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllCharsOfOwnerRequest } as QueryGetAllCharsOfOwnerRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
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

  fromJSON(object: any): QueryGetAllCharsOfOwnerRequest {
    const message = { ...baseQueryGetAllCharsOfOwnerRequest } as QueryGetAllCharsOfOwnerRequest
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllCharsOfOwnerRequest): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllCharsOfOwnerRequest>): QueryGetAllCharsOfOwnerRequest {
    const message = { ...baseQueryGetAllCharsOfOwnerRequest } as QueryGetAllCharsOfOwnerRequest
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetAllCharsOfOwnerResponse: object = {}

export const QueryGetAllCharsOfOwnerResponse = {
  encode(message: QueryGetAllCharsOfOwnerResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Character) {
      Character.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllCharsOfOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAllCharsOfOwnerResponse } as QueryGetAllCharsOfOwnerResponse
    message.Character = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Character.push(Character.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryGetAllCharsOfOwnerResponse {
    const message = { ...baseQueryGetAllCharsOfOwnerResponse } as QueryGetAllCharsOfOwnerResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetAllCharsOfOwnerResponse): unknown {
    const obj: any = {}
    if (message.Character) {
      obj.Character = message.Character.map((e) => (e ? Character.toJSON(e) : undefined))
    } else {
      obj.Character = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAllCharsOfOwnerResponse>): QueryGetAllCharsOfOwnerResponse {
    const message = { ...baseQueryGetAllCharsOfOwnerResponse } as QueryGetAllCharsOfOwnerResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromPartial(e))
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

const baseQueryGetCharacterRequest: object = { index: '' }

export const QueryGetCharacterRequest = {
  encode(message: QueryGetCharacterRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCharacterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCharacterRequest } as QueryGetCharacterRequest
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

  fromJSON(object: any): QueryGetCharacterRequest {
    const message = { ...baseQueryGetCharacterRequest } as QueryGetCharacterRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetCharacterRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCharacterRequest>): QueryGetCharacterRequest {
    const message = { ...baseQueryGetCharacterRequest } as QueryGetCharacterRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetCharacterResponse: object = {}

export const QueryGetCharacterResponse = {
  encode(message: QueryGetCharacterResponse, writer: Writer = Writer.create()): Writer {
    if (message.Character !== undefined) {
      Character.encode(message.Character, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCharacterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCharacterResponse } as QueryGetCharacterResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Character = Character.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCharacterResponse {
    const message = { ...baseQueryGetCharacterResponse } as QueryGetCharacterResponse
    if (object.Character !== undefined && object.Character !== null) {
      message.Character = Character.fromJSON(object.Character)
    } else {
      message.Character = undefined
    }
    return message
  },

  toJSON(message: QueryGetCharacterResponse): unknown {
    const obj: any = {}
    message.Character !== undefined && (obj.Character = message.Character ? Character.toJSON(message.Character) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCharacterResponse>): QueryGetCharacterResponse {
    const message = { ...baseQueryGetCharacterResponse } as QueryGetCharacterResponse
    if (object.Character !== undefined && object.Character !== null) {
      message.Character = Character.fromPartial(object.Character)
    } else {
      message.Character = undefined
    }
    return message
  }
}

const baseQueryAllCharacterRequest: object = {}

export const QueryAllCharacterRequest = {
  encode(message: QueryAllCharacterRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCharacterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCharacterRequest } as QueryAllCharacterRequest
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

  fromJSON(object: any): QueryAllCharacterRequest {
    const message = { ...baseQueryAllCharacterRequest } as QueryAllCharacterRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCharacterRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCharacterRequest>): QueryAllCharacterRequest {
    const message = { ...baseQueryAllCharacterRequest } as QueryAllCharacterRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllCharacterResponse: object = {}

export const QueryAllCharacterResponse = {
  encode(message: QueryAllCharacterResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Character) {
      Character.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCharacterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCharacterResponse } as QueryAllCharacterResponse
    message.Character = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Character.push(Character.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllCharacterResponse {
    const message = { ...baseQueryAllCharacterResponse } as QueryAllCharacterResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCharacterResponse): unknown {
    const obj: any = {}
    if (message.Character) {
      obj.Character = message.Character.map((e) => (e ? Character.toJSON(e) : undefined))
    } else {
      obj.Character = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCharacterResponse>): QueryAllCharacterResponse {
    const message = { ...baseQueryAllCharacterResponse } as QueryAllCharacterResponse
    message.Character = []
    if (object.Character !== undefined && object.Character !== null) {
      for (const e of object.Character) {
        message.Character.push(Character.fromPartial(e))
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
  /** Queries a list of getAllCharsByCreator items. */
  GetAllCharsByCreator(request: QueryGetAllCharsByCreatorRequest): Promise<QueryGetAllCharsByCreatorResponse>
  /** Queries a list of getCharByName items. */
  GetCharByName(request: QueryGetCharByNameRequest): Promise<QueryGetCharByNameResponse>
  /** Queries a list of getAllCharsForSale items. */
  GetAllCharsForSale(request: QueryGetAllCharsForSaleRequest): Promise<QueryGetAllCharsForSaleResponse>
  /** Queries a list of getAllCharsOfType items. */
  GetAllCharsOfType(request: QueryGetAllCharsOfTypeRequest): Promise<QueryGetAllCharsOfTypeResponse>
  /** Queries a list of getAllCharsOfOwner items. */
  GetAllCharsOfOwner(request: QueryGetAllCharsOfOwnerRequest): Promise<QueryGetAllCharsOfOwnerResponse>
  /** Queries a character by index. */
  Character(request: QueryGetCharacterRequest): Promise<QueryGetCharacterResponse>
  /** Queries a list of character items. */
  CharacterAll(request: QueryAllCharacterRequest): Promise<QueryAllCharacterResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  GetAllCharsByCreator(request: QueryGetAllCharsByCreatorRequest): Promise<QueryGetAllCharsByCreatorResponse> {
    const data = QueryGetAllCharsByCreatorRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.charservice.Query', 'GetAllCharsByCreator', data)
    return promise.then((data) => QueryGetAllCharsByCreatorResponse.decode(new Reader(data)))
  }

  GetCharByName(request: QueryGetCharByNameRequest): Promise<QueryGetCharByNameResponse> {
    const data = QueryGetCharByNameRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.charservice.Query', 'GetCharByName', data)
    return promise.then((data) => QueryGetCharByNameResponse.decode(new Reader(data)))
  }

  GetAllCharsForSale(request: QueryGetAllCharsForSaleRequest): Promise<QueryGetAllCharsForSaleResponse> {
    const data = QueryGetAllCharsForSaleRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.charservice.Query', 'GetAllCharsForSale', data)
    return promise.then((data) => QueryGetAllCharsForSaleResponse.decode(new Reader(data)))
  }

  GetAllCharsOfType(request: QueryGetAllCharsOfTypeRequest): Promise<QueryGetAllCharsOfTypeResponse> {
    const data = QueryGetAllCharsOfTypeRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.charservice.Query', 'GetAllCharsOfType', data)
    return promise.then((data) => QueryGetAllCharsOfTypeResponse.decode(new Reader(data)))
  }

  GetAllCharsOfOwner(request: QueryGetAllCharsOfOwnerRequest): Promise<QueryGetAllCharsOfOwnerResponse> {
    const data = QueryGetAllCharsOfOwnerRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.charservice.Query', 'GetAllCharsOfOwner', data)
    return promise.then((data) => QueryGetAllCharsOfOwnerResponse.decode(new Reader(data)))
  }

  Character(request: QueryGetCharacterRequest): Promise<QueryGetCharacterResponse> {
    const data = QueryGetCharacterRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.charservice.Query', 'Character', data)
    return promise.then((data) => QueryGetCharacterResponse.decode(new Reader(data)))
  }

  CharacterAll(request: QueryAllCharacterRequest): Promise<QueryAllCharacterResponse> {
    const data = QueryAllCharacterRequest.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.charservice.Query', 'CharacterAll', data)
    return promise.then((data) => QueryAllCharacterResponse.decode(new Reader(data)))
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
