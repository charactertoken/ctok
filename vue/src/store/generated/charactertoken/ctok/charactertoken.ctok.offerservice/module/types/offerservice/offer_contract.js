/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'charactertoken.ctok.offerservice';
const baseOfferContract = { expiresAt: 0, creator: '', index: '', charId: '', value: '' };
export const OfferContract = {
    encode(message, writer = Writer.create()) {
        if (message.expiresAt !== 0) {
            writer.uint32(8).int64(message.expiresAt);
        }
        if (message.creator !== '') {
            writer.uint32(18).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(26).string(message.index);
        }
        if (message.charId !== '') {
            writer.uint32(34).string(message.charId);
        }
        if (message.value !== '') {
            writer.uint32(42).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOfferContract };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.expiresAt = longToNumber(reader.int64());
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.index = reader.string();
                    break;
                case 4:
                    message.charId = reader.string();
                    break;
                case 5:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOfferContract };
        if (object.expiresAt !== undefined && object.expiresAt !== null) {
            message.expiresAt = Number(object.expiresAt);
        }
        else {
            message.expiresAt = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.charId !== undefined && object.charId !== null) {
            message.charId = String(object.charId);
        }
        else {
            message.charId = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt);
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.charId !== undefined && (obj.charId = message.charId);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOfferContract };
        if (object.expiresAt !== undefined && object.expiresAt !== null) {
            message.expiresAt = object.expiresAt;
        }
        else {
            message.expiresAt = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.charId !== undefined && object.charId !== null) {
            message.charId = object.charId;
        }
        else {
            message.charId = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
