/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'charactertoken.ctok.offerservice'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgAcceptOffer {
  creator: string
  offerId: string
}

export interface MsgAcceptOfferResponse {
  offerId: string
  charId: string
  salePrice: string
}

export interface MsgCreateOffer {
  expireInMinutes: number
  creator: string
  bid: string
  charId: string
}

export interface MsgCreateOfferResponse {
  index: string
}

const baseMsgAcceptOffer: object = { creator: '', offerId: '' }

export const MsgAcceptOffer = {
  encode(message: MsgAcceptOffer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.offerId !== '') {
      writer.uint32(18).string(message.offerId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptOffer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAcceptOffer } as MsgAcceptOffer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.offerId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgAcceptOffer {
    const message = { ...baseMsgAcceptOffer } as MsgAcceptOffer
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = String(object.offerId)
    } else {
      message.offerId = ''
    }
    return message
  },

  toJSON(message: MsgAcceptOffer): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.offerId !== undefined && (obj.offerId = message.offerId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgAcceptOffer>): MsgAcceptOffer {
    const message = { ...baseMsgAcceptOffer } as MsgAcceptOffer
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = object.offerId
    } else {
      message.offerId = ''
    }
    return message
  }
}

const baseMsgAcceptOfferResponse: object = { offerId: '', charId: '', salePrice: '' }

export const MsgAcceptOfferResponse = {
  encode(message: MsgAcceptOfferResponse, writer: Writer = Writer.create()): Writer {
    if (message.offerId !== '') {
      writer.uint32(10).string(message.offerId)
    }
    if (message.charId !== '') {
      writer.uint32(18).string(message.charId)
    }
    if (message.salePrice !== '') {
      writer.uint32(26).string(message.salePrice)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptOfferResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAcceptOfferResponse } as MsgAcceptOfferResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.offerId = reader.string()
          break
        case 2:
          message.charId = reader.string()
          break
        case 3:
          message.salePrice = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgAcceptOfferResponse {
    const message = { ...baseMsgAcceptOfferResponse } as MsgAcceptOfferResponse
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = String(object.offerId)
    } else {
      message.offerId = ''
    }
    if (object.charId !== undefined && object.charId !== null) {
      message.charId = String(object.charId)
    } else {
      message.charId = ''
    }
    if (object.salePrice !== undefined && object.salePrice !== null) {
      message.salePrice = String(object.salePrice)
    } else {
      message.salePrice = ''
    }
    return message
  },

  toJSON(message: MsgAcceptOfferResponse): unknown {
    const obj: any = {}
    message.offerId !== undefined && (obj.offerId = message.offerId)
    message.charId !== undefined && (obj.charId = message.charId)
    message.salePrice !== undefined && (obj.salePrice = message.salePrice)
    return obj
  },

  fromPartial(object: DeepPartial<MsgAcceptOfferResponse>): MsgAcceptOfferResponse {
    const message = { ...baseMsgAcceptOfferResponse } as MsgAcceptOfferResponse
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = object.offerId
    } else {
      message.offerId = ''
    }
    if (object.charId !== undefined && object.charId !== null) {
      message.charId = object.charId
    } else {
      message.charId = ''
    }
    if (object.salePrice !== undefined && object.salePrice !== null) {
      message.salePrice = object.salePrice
    } else {
      message.salePrice = ''
    }
    return message
  }
}

const baseMsgCreateOffer: object = { expireInMinutes: 0, creator: '', bid: '', charId: '' }

export const MsgCreateOffer = {
  encode(message: MsgCreateOffer, writer: Writer = Writer.create()): Writer {
    if (message.expireInMinutes !== 0) {
      writer.uint32(8).int64(message.expireInMinutes)
    }
    if (message.creator !== '') {
      writer.uint32(18).string(message.creator)
    }
    if (message.bid !== '') {
      writer.uint32(26).string(message.bid)
    }
    if (message.charId !== '') {
      writer.uint32(34).string(message.charId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOffer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateOffer } as MsgCreateOffer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.expireInMinutes = longToNumber(reader.int64() as Long)
          break
        case 2:
          message.creator = reader.string()
          break
        case 3:
          message.bid = reader.string()
          break
        case 4:
          message.charId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateOffer {
    const message = { ...baseMsgCreateOffer } as MsgCreateOffer
    if (object.expireInMinutes !== undefined && object.expireInMinutes !== null) {
      message.expireInMinutes = Number(object.expireInMinutes)
    } else {
      message.expireInMinutes = 0
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = String(object.bid)
    } else {
      message.bid = ''
    }
    if (object.charId !== undefined && object.charId !== null) {
      message.charId = String(object.charId)
    } else {
      message.charId = ''
    }
    return message
  },

  toJSON(message: MsgCreateOffer): unknown {
    const obj: any = {}
    message.expireInMinutes !== undefined && (obj.expireInMinutes = message.expireInMinutes)
    message.creator !== undefined && (obj.creator = message.creator)
    message.bid !== undefined && (obj.bid = message.bid)
    message.charId !== undefined && (obj.charId = message.charId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateOffer>): MsgCreateOffer {
    const message = { ...baseMsgCreateOffer } as MsgCreateOffer
    if (object.expireInMinutes !== undefined && object.expireInMinutes !== null) {
      message.expireInMinutes = object.expireInMinutes
    } else {
      message.expireInMinutes = 0
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = object.bid
    } else {
      message.bid = ''
    }
    if (object.charId !== undefined && object.charId !== null) {
      message.charId = object.charId
    } else {
      message.charId = ''
    }
    return message
  }
}

const baseMsgCreateOfferResponse: object = { index: '' }

export const MsgCreateOfferResponse = {
  encode(message: MsgCreateOfferResponse, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOfferResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateOfferResponse } as MsgCreateOfferResponse
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

  fromJSON(object: any): MsgCreateOfferResponse {
    const message = { ...baseMsgCreateOfferResponse } as MsgCreateOfferResponse
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: MsgCreateOfferResponse): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateOfferResponse>): MsgCreateOfferResponse {
    const message = { ...baseMsgCreateOfferResponse } as MsgCreateOfferResponse
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AcceptOffer(request: MsgAcceptOffer): Promise<MsgAcceptOfferResponse>
  CreateOffer(request: MsgCreateOffer): Promise<MsgCreateOfferResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  AcceptOffer(request: MsgAcceptOffer): Promise<MsgAcceptOfferResponse> {
    const data = MsgAcceptOffer.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.offerservice.Msg', 'AcceptOffer', data)
    return promise.then((data) => MsgAcceptOfferResponse.decode(new Reader(data)))
  }

  CreateOffer(request: MsgCreateOffer): Promise<MsgCreateOfferResponse> {
    const data = MsgCreateOffer.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.offerservice.Msg', 'CreateOffer', data)
    return promise.then((data) => MsgCreateOfferResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
