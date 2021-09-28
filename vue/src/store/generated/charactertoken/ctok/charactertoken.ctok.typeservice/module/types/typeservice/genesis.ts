/* eslint-disable */
import { Ctype } from '../typeservice/ctype'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'charactertoken.ctok.typeservice'

/** GenesisState defines the typeservice module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  ctypeList: Ctype[]
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.ctypeList) {
      Ctype.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.ctypeList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ctypeList.push(Ctype.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.ctypeList = []
    if (object.ctypeList !== undefined && object.ctypeList !== null) {
      for (const e of object.ctypeList) {
        message.ctypeList.push(Ctype.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.ctypeList) {
      obj.ctypeList = message.ctypeList.map((e) => (e ? Ctype.toJSON(e) : undefined))
    } else {
      obj.ctypeList = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.ctypeList = []
    if (object.ctypeList !== undefined && object.ctypeList !== null) {
      for (const e of object.ctypeList) {
        message.ctypeList.push(Ctype.fromPartial(e))
      }
    }
    return message
  }
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
