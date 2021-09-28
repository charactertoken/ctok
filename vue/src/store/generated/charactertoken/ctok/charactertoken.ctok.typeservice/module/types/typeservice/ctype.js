/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'charactertoken.ctok.typeservice';
const baseCtype = { creator: '', index: '', name: '', language: '', messageName: '', group: '' };
export const Ctype = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.language !== '') {
            writer.uint32(34).string(message.language);
        }
        if (message.schemaFile.length !== 0) {
            writer.uint32(42).bytes(message.schemaFile);
        }
        if (message.messageName !== '') {
            writer.uint32(50).string(message.messageName);
        }
        if (message.group !== '') {
            writer.uint32(58).string(message.group);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCtype };
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
                    message.name = reader.string();
                    break;
                case 4:
                    message.language = reader.string();
                    break;
                case 5:
                    message.schemaFile = reader.bytes();
                    break;
                case 6:
                    message.messageName = reader.string();
                    break;
                case 7:
                    message.group = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCtype };
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
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.language !== undefined && object.language !== null) {
            message.language = String(object.language);
        }
        else {
            message.language = '';
        }
        if (object.schemaFile !== undefined && object.schemaFile !== null) {
            message.schemaFile = bytesFromBase64(object.schemaFile);
        }
        if (object.messageName !== undefined && object.messageName !== null) {
            message.messageName = String(object.messageName);
        }
        else {
            message.messageName = '';
        }
        if (object.group !== undefined && object.group !== null) {
            message.group = String(object.group);
        }
        else {
            message.group = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.name !== undefined && (obj.name = message.name);
        message.language !== undefined && (obj.language = message.language);
        message.schemaFile !== undefined && (obj.schemaFile = base64FromBytes(message.schemaFile !== undefined ? message.schemaFile : new Uint8Array()));
        message.messageName !== undefined && (obj.messageName = message.messageName);
        message.group !== undefined && (obj.group = message.group);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCtype };
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
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.language !== undefined && object.language !== null) {
            message.language = object.language;
        }
        else {
            message.language = '';
        }
        if (object.schemaFile !== undefined && object.schemaFile !== null) {
            message.schemaFile = object.schemaFile;
        }
        else {
            message.schemaFile = new Uint8Array();
        }
        if (object.messageName !== undefined && object.messageName !== null) {
            message.messageName = object.messageName;
        }
        else {
            message.messageName = '';
        }
        if (object.group !== undefined && object.group !== null) {
            message.group = object.group;
        }
        else {
            message.group = '';
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
