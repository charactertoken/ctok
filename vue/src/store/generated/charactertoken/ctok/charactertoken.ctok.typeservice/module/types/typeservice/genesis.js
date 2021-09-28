/* eslint-disable */
import { Ctype } from '../typeservice/ctype';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'charactertoken.ctok.typeservice';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ctypeList) {
            Ctype.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.ctypeList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ctypeList.push(Ctype.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.ctypeList = [];
        if (object.ctypeList !== undefined && object.ctypeList !== null) {
            for (const e of object.ctypeList) {
                message.ctypeList.push(Ctype.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ctypeList) {
            obj.ctypeList = message.ctypeList.map((e) => (e ? Ctype.toJSON(e) : undefined));
        }
        else {
            obj.ctypeList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.ctypeList = [];
        if (object.ctypeList !== undefined && object.ctypeList !== null) {
            for (const e of object.ctypeList) {
                message.ctypeList.push(Ctype.fromPartial(e));
            }
        }
        return message;
    }
};
