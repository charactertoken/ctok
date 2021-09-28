/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Ctype } from '../typeservice/ctype';
export const protobufPackage = 'charactertoken.ctok.typeservice';
const baseQueryGetAllTypesByNameRequest = { name: '' };
export const QueryGetAllTypesByNameRequest = {
    encode(message, writer = Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAllTypesByNameRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetAllTypesByNameRequest };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAllTypesByNameRequest };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetAllTypesByNameResponse = {};
export const QueryGetAllTypesByNameResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ctype) {
            Ctype.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAllTypesByNameResponse };
        message.ctype = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ctype.push(Ctype.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetAllTypesByNameResponse };
        message.ctype = [];
        if (object.ctype !== undefined && object.ctype !== null) {
            for (const e of object.ctype) {
                message.ctype.push(Ctype.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ctype) {
            obj.ctype = message.ctype.map((e) => (e ? Ctype.toJSON(e) : undefined));
        }
        else {
            obj.ctype = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAllTypesByNameResponse };
        message.ctype = [];
        if (object.ctype !== undefined && object.ctype !== null) {
            for (const e of object.ctype) {
                message.ctype.push(Ctype.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetAllTypesByGroupRequest = { group: '' };
export const QueryGetAllTypesByGroupRequest = {
    encode(message, writer = Writer.create()) {
        if (message.group !== '') {
            writer.uint32(10).string(message.group);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAllTypesByGroupRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetAllTypesByGroupRequest };
        if (object.group !== undefined && object.group !== null) {
            message.group = String(object.group);
        }
        else {
            message.group = '';
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.group !== undefined && (obj.group = message.group);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAllTypesByGroupRequest };
        if (object.group !== undefined && object.group !== null) {
            message.group = object.group;
        }
        else {
            message.group = '';
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetAllTypesByGroupResponse = {};
export const QueryGetAllTypesByGroupResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ctype) {
            Ctype.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAllTypesByGroupResponse };
        message.ctype = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ctype.push(Ctype.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetAllTypesByGroupResponse };
        message.ctype = [];
        if (object.ctype !== undefined && object.ctype !== null) {
            for (const e of object.ctype) {
                message.ctype.push(Ctype.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ctype) {
            obj.ctype = message.ctype.map((e) => (e ? Ctype.toJSON(e) : undefined));
        }
        else {
            obj.ctype = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAllTypesByGroupResponse };
        message.ctype = [];
        if (object.ctype !== undefined && object.ctype !== null) {
            for (const e of object.ctype) {
                message.ctype.push(Ctype.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetCtypeRequest = { index: '' };
export const QueryGetCtypeRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCtypeRequest };
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
        const message = { ...baseQueryGetCtypeRequest };
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
        const message = { ...baseQueryGetCtypeRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetCtypeResponse = {};
export const QueryGetCtypeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Ctype !== undefined) {
            Ctype.encode(message.Ctype, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCtypeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Ctype = Ctype.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCtypeResponse };
        if (object.Ctype !== undefined && object.Ctype !== null) {
            message.Ctype = Ctype.fromJSON(object.Ctype);
        }
        else {
            message.Ctype = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Ctype !== undefined && (obj.Ctype = message.Ctype ? Ctype.toJSON(message.Ctype) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCtypeResponse };
        if (object.Ctype !== undefined && object.Ctype !== null) {
            message.Ctype = Ctype.fromPartial(object.Ctype);
        }
        else {
            message.Ctype = undefined;
        }
        return message;
    }
};
const baseQueryAllCtypeRequest = {};
export const QueryAllCtypeRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCtypeRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCtypeRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCtypeRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllCtypeResponse = {};
export const QueryAllCtypeResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Ctype) {
            Ctype.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCtypeResponse };
        message.Ctype = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Ctype.push(Ctype.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCtypeResponse };
        message.Ctype = [];
        if (object.Ctype !== undefined && object.Ctype !== null) {
            for (const e of object.Ctype) {
                message.Ctype.push(Ctype.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Ctype) {
            obj.Ctype = message.Ctype.map((e) => (e ? Ctype.toJSON(e) : undefined));
        }
        else {
            obj.Ctype = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCtypeResponse };
        message.Ctype = [];
        if (object.Ctype !== undefined && object.Ctype !== null) {
            for (const e of object.Ctype) {
                message.Ctype.push(Ctype.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    GetAllTypesByName(request) {
        const data = QueryGetAllTypesByNameRequest.encode(request).finish();
        const promise = this.rpc.request('charactertoken.ctok.typeservice.Query', 'GetAllTypesByName', data);
        return promise.then((data) => QueryGetAllTypesByNameResponse.decode(new Reader(data)));
    }
    GetAllTypesByGroup(request) {
        const data = QueryGetAllTypesByGroupRequest.encode(request).finish();
        const promise = this.rpc.request('charactertoken.ctok.typeservice.Query', 'GetAllTypesByGroup', data);
        return promise.then((data) => QueryGetAllTypesByGroupResponse.decode(new Reader(data)));
    }
    Ctype(request) {
        const data = QueryGetCtypeRequest.encode(request).finish();
        const promise = this.rpc.request('charactertoken.ctok.typeservice.Query', 'Ctype', data);
        return promise.then((data) => QueryGetCtypeResponse.decode(new Reader(data)));
    }
    CtypeAll(request) {
        const data = QueryAllCtypeRequest.encode(request).finish();
        const promise = this.rpc.request('charactertoken.ctok.typeservice.Query', 'CtypeAll', data);
        return promise.then((data) => QueryAllCtypeResponse.decode(new Reader(data)));
    }
}
