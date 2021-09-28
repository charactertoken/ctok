/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'charactertoken.ctok.charservice'

export interface Character {
  tradeRestricted: boolean
  saleTime: number
  creator: string
  index: string
  name: string
  owner: string
  ctype: string
  cost: string
  license: string
  value: Uint8Array
}

const baseCharacter: object = { tradeRestricted: false, saleTime: 0, creator: '', index: '', name: '', owner: '', ctype: '', cost: '', license: '' }

export const Character = {
  encode(message: Character, writer: Writer = Writer.create()): Writer {
    if (message.tradeRestricted === true) {
      writer.uint32(8).bool(message.tradeRestricted)
    }
    if (message.saleTime !== 0) {
      writer.uint32(16).int64(message.saleTime)
    }
    if (message.creator !== '') {
      writer.uint32(26).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(34).string(message.index)
    }
    if (message.name !== '') {
      writer.uint32(42).string(message.name)
    }
    if (message.owner !== '') {
      writer.uint32(50).string(message.owner)
    }
    if (message.ctype !== '') {
      writer.uint32(58).string(message.ctype)
    }
    if (message.cost !== '') {
      writer.uint32(66).string(message.cost)
    }
    if (message.license !== '') {
      writer.uint32(74).string(message.license)
    }
    if (message.value.length !== 0) {
      writer.uint32(82).bytes(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Character {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCharacter } as Character
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.tradeRestricted = reader.bool()
          break
        case 2:
          message.saleTime = longToNumber(reader.int64() as Long)
          break
        case 3:
          message.creator = reader.string()
          break
        case 4:
          message.index = reader.string()
          break
        case 5:
          message.name = reader.string()
          break
        case 6:
          message.owner = reader.string()
          break
        case 7:
          message.ctype = reader.string()
          break
        case 8:
          message.cost = reader.string()
          break
        case 9:
          message.license = reader.string()
          break
        case 10:
          message.value = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Character {
    const message = { ...baseCharacter } as Character
    if (object.tradeRestricted !== undefined && object.tradeRestricted !== null) {
      message.tradeRestricted = Boolean(object.tradeRestricted)
    } else {
      message.tradeRestricted = false
    }
    if (object.saleTime !== undefined && object.saleTime !== null) {
      message.saleTime = Number(object.saleTime)
    } else {
      message.saleTime = 0
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.ctype !== undefined && object.ctype !== null) {
      message.ctype = String(object.ctype)
    } else {
      message.ctype = ''
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = String(object.cost)
    } else {
      message.cost = ''
    }
    if (object.license !== undefined && object.license !== null) {
      message.license = String(object.license)
    } else {
      message.license = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value)
    }
    return message
  },

  toJSON(message: Character): unknown {
    const obj: any = {}
    message.tradeRestricted !== undefined && (obj.tradeRestricted = message.tradeRestricted)
    message.saleTime !== undefined && (obj.saleTime = message.saleTime)
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.name !== undefined && (obj.name = message.name)
    message.owner !== undefined && (obj.owner = message.owner)
    message.ctype !== undefined && (obj.ctype = message.ctype)
    message.cost !== undefined && (obj.cost = message.cost)
    message.license !== undefined && (obj.license = message.license)
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()))
    return obj
  },

  fromPartial(object: DeepPartial<Character>): Character {
    const message = { ...baseCharacter } as Character
    if (object.tradeRestricted !== undefined && object.tradeRestricted !== null) {
      message.tradeRestricted = object.tradeRestricted
    } else {
      message.tradeRestricted = false
    }
    if (object.saleTime !== undefined && object.saleTime !== null) {
      message.saleTime = object.saleTime
    } else {
      message.saleTime = 0
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.ctype !== undefined && object.ctype !== null) {
      message.ctype = object.ctype
    } else {
      message.ctype = ''
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost
    } else {
      message.cost = ''
    }
    if (object.license !== undefined && object.license !== null) {
      message.license = object.license
    } else {
      message.license = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = new Uint8Array()
    }
    return message
  }
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
