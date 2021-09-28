/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'charactertoken.ctok.charservice';
const baseMsgUnlistSale = { creator: '', index: '' };
export const MsgUnlistSale = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUnlistSale };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUnlistSale };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUnlistSale };
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
        return message;
    }
};
const baseMsgUnlistSaleResponse = { index: '' };
export const MsgUnlistSaleResponse = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUnlistSaleResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUnlistSaleResponse };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUnlistSaleResponse };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseMsgSetSale = { creator: '', index: '', cost: '', saleTimeMinutes: 0 };
export const MsgSetSale = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.cost !== '') {
            writer.uint32(26).string(message.cost);
        }
        if (message.saleTimeMinutes !== 0) {
            writer.uint32(32).int64(message.saleTimeMinutes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetSale };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.cost = reader.string();
                    break;
                case 4:
                    message.saleTimeMinutes = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSetSale };
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
        if (object.cost !== undefined && object.cost !== null) {
            message.cost = String(object.cost);
        }
        else {
            message.cost = '';
        }
        if (object.saleTimeMinutes !== undefined && object.saleTimeMinutes !== null) {
            message.saleTimeMinutes = Number(object.saleTimeMinutes);
        }
        else {
            message.saleTimeMinutes = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.cost !== undefined && (obj.cost = message.cost);
        message.saleTimeMinutes !== undefined && (obj.saleTimeMinutes = message.saleTimeMinutes);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSetSale };
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
        if (object.cost !== undefined && object.cost !== null) {
            message.cost = object.cost;
        }
        else {
            message.cost = '';
        }
        if (object.saleTimeMinutes !== undefined && object.saleTimeMinutes !== null) {
            message.saleTimeMinutes = object.saleTimeMinutes;
        }
        else {
            message.saleTimeMinutes = 0;
        }
        return message;
    }
};
const baseMsgSetSaleResponse = { index: '', saleEndTime: '' };
export const MsgSetSaleResponse = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        if (message.saleEndTime !== '') {
            writer.uint32(18).string(message.saleEndTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetSaleResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.saleEndTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSetSaleResponse };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.saleEndTime !== undefined && object.saleEndTime !== null) {
            message.saleEndTime = String(object.saleEndTime);
        }
        else {
            message.saleEndTime = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.saleEndTime !== undefined && (obj.saleEndTime = message.saleEndTime);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSetSaleResponse };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.saleEndTime !== undefined && object.saleEndTime !== null) {
            message.saleEndTime = object.saleEndTime;
        }
        else {
            message.saleEndTime = '';
        }
        return message;
    }
};
const baseMsgBuyChar = { tradeRestricted: false, saleTimeMinutes: 0, creator: '', name: '', charType: '', cost: '', index: '', license: '' };
export const MsgBuyChar = {
    encode(message, writer = Writer.create()) {
        if (message.tradeRestricted === true) {
            writer.uint32(8).bool(message.tradeRestricted);
        }
        if (message.saleTimeMinutes !== 0) {
            writer.uint32(16).int64(message.saleTimeMinutes);
        }
        if (message.creator !== '') {
            writer.uint32(26).string(message.creator);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.charType !== '') {
            writer.uint32(42).string(message.charType);
        }
        if (message.cost !== '') {
            writer.uint32(50).string(message.cost);
        }
        if (message.index !== '') {
            writer.uint32(58).string(message.index);
        }
        if (message.license !== '') {
            writer.uint32(66).string(message.license);
        }
        if (message.value.length !== 0) {
            writer.uint32(74).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBuyChar };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradeRestricted = reader.bool();
                    break;
                case 2:
                    message.saleTimeMinutes = longToNumber(reader.int64());
                    break;
                case 3:
                    message.creator = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.charType = reader.string();
                    break;
                case 6:
                    message.cost = reader.string();
                    break;
                case 7:
                    message.index = reader.string();
                    break;
                case 8:
                    message.license = reader.string();
                    break;
                case 9:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgBuyChar };
        if (object.tradeRestricted !== undefined && object.tradeRestricted !== null) {
            message.tradeRestricted = Boolean(object.tradeRestricted);
        }
        else {
            message.tradeRestricted = false;
        }
        if (object.saleTimeMinutes !== undefined && object.saleTimeMinutes !== null) {
            message.saleTimeMinutes = Number(object.saleTimeMinutes);
        }
        else {
            message.saleTimeMinutes = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.charType !== undefined && object.charType !== null) {
            message.charType = String(object.charType);
        }
        else {
            message.charType = '';
        }
        if (object.cost !== undefined && object.cost !== null) {
            message.cost = String(object.cost);
        }
        else {
            message.cost = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.license !== undefined && object.license !== null) {
            message.license = String(object.license);
        }
        else {
            message.license = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tradeRestricted !== undefined && (obj.tradeRestricted = message.tradeRestricted);
        message.saleTimeMinutes !== undefined && (obj.saleTimeMinutes = message.saleTimeMinutes);
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.charType !== undefined && (obj.charType = message.charType);
        message.cost !== undefined && (obj.cost = message.cost);
        message.index !== undefined && (obj.index = message.index);
        message.license !== undefined && (obj.license = message.license);
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBuyChar };
        if (object.tradeRestricted !== undefined && object.tradeRestricted !== null) {
            message.tradeRestricted = object.tradeRestricted;
        }
        else {
            message.tradeRestricted = false;
        }
        if (object.saleTimeMinutes !== undefined && object.saleTimeMinutes !== null) {
            message.saleTimeMinutes = object.saleTimeMinutes;
        }
        else {
            message.saleTimeMinutes = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.charType !== undefined && object.charType !== null) {
            message.charType = object.charType;
        }
        else {
            message.charType = '';
        }
        if (object.cost !== undefined && object.cost !== null) {
            message.cost = object.cost;
        }
        else {
            message.cost = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.license !== undefined && object.license !== null) {
            message.license = object.license;
        }
        else {
            message.license = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        return message;
    }
};
const baseMsgBuyCharResponse = { index: '' };
export const MsgBuyCharResponse = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBuyCharResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgBuyCharResponse };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBuyCharResponse };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    UnlistSale(request) {
        const data = MsgUnlistSale.encode(request).finish();
        const promise = this.rpc.request('charactertoken.ctok.charservice.Msg', 'UnlistSale', data);
        return promise.then((data) => MsgUnlistSaleResponse.decode(new Reader(data)));
    }
    SetSale(request) {
        const data = MsgSetSale.encode(request).finish();
        const promise = this.rpc.request('charactertoken.ctok.charservice.Msg', 'SetSale', data);
        return promise.then((data) => MsgSetSaleResponse.decode(new Reader(data)));
    }
    BuyChar(request) {
        const data = MsgBuyChar.encode(request).finish();
        const promise = this.rpc.request('charactertoken.ctok.charservice.Msg', 'BuyChar', data);
        return promise.then((data) => MsgBuyCharResponse.decode(new Reader(data)));
    }
}
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
const atob = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(''));
}
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
