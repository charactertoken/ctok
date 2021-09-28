/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'charactertoken.ctok.typeservice'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgBuyType {
  creator: string
  name: string
  language: string
  schemaFile: Uint8Array
  messageName: string
  group: string
}

export interface MsgBuyTypeResponse {
  index: string
}

const baseMsgBuyType: object = { creator: '', name: '', language: '', messageName: '', group: '' }

export const MsgBuyType = {
  encode(message: MsgBuyType, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.language !== '') {
      writer.uint32(26).string(message.language)
    }
    if (message.schemaFile.length !== 0) {
      writer.uint32(34).bytes(message.schemaFile)
    }
    if (message.messageName !== '') {
      writer.uint32(42).string(message.messageName)
    }
    if (message.group !== '') {
      writer.uint32(50).string(message.group)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyType {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuyType } as MsgBuyType
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.language = reader.string()
          break
        case 4:
          message.schemaFile = reader.bytes()
          break
        case 5:
          message.messageName = reader.string()
          break
        case 6:
          message.group = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgBuyType {
    const message = { ...baseMsgBuyType } as MsgBuyType
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.language !== undefined && object.language !== null) {
      message.language = String(object.language)
    } else {
      message.language = ''
    }
    if (object.schemaFile !== undefined && object.schemaFile !== null) {
      message.schemaFile = bytesFromBase64(object.schemaFile)
    }
    if (object.messageName !== undefined && object.messageName !== null) {
      message.messageName = String(object.messageName)
    } else {
      message.messageName = ''
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group)
    } else {
      message.group = ''
    }
    return message
  },

  toJSON(message: MsgBuyType): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.language !== undefined && (obj.language = message.language)
    message.schemaFile !== undefined && (obj.schemaFile = base64FromBytes(message.schemaFile !== undefined ? message.schemaFile : new Uint8Array()))
    message.messageName !== undefined && (obj.messageName = message.messageName)
    message.group !== undefined && (obj.group = message.group)
    return obj
  },

  fromPartial(object: DeepPartial<MsgBuyType>): MsgBuyType {
    const message = { ...baseMsgBuyType } as MsgBuyType
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.language !== undefined && object.language !== null) {
      message.language = object.language
    } else {
      message.language = ''
    }
    if (object.schemaFile !== undefined && object.schemaFile !== null) {
      message.schemaFile = object.schemaFile
    } else {
      message.schemaFile = new Uint8Array()
    }
    if (object.messageName !== undefined && object.messageName !== null) {
      message.messageName = object.messageName
    } else {
      message.messageName = ''
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group
    } else {
      message.group = ''
    }
    return message
  }
}

const baseMsgBuyTypeResponse: object = { index: '' }

export const MsgBuyTypeResponse = {
  encode(message: MsgBuyTypeResponse, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyTypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuyTypeResponse } as MsgBuyTypeResponse
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

  fromJSON(object: any): MsgBuyTypeResponse {
    const message = { ...baseMsgBuyTypeResponse } as MsgBuyTypeResponse
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: MsgBuyTypeResponse): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgBuyTypeResponse>): MsgBuyTypeResponse {
    const message = { ...baseMsgBuyTypeResponse } as MsgBuyTypeResponse
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
  BuyType(request: MsgBuyType): Promise<MsgBuyTypeResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  BuyType(request: MsgBuyType): Promise<MsgBuyTypeResponse> {
    const data = MsgBuyType.encode(request).finish()
    const promise = this.rpc.request('charactertoken.ctok.typeservice.Msg', 'BuyType', data)
    return promise.then((data) => MsgBuyTypeResponse.decode(new Reader(data)))
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

const atob: (b64: string) => string = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'))
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i)
  }
  return arr
}

const btoa: (bin: string) => string = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'))
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = []
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]))
  }
  return btoa(bin.join(''))
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
