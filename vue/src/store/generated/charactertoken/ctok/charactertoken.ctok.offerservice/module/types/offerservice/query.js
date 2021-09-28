/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { OfferContract } from '../offerservice/offer_contract';
export const protobufPackage = 'charactertoken.ctok.offerservice';
const baseQueryGetAllCharOffersRequest = { charId: '' };
export const QueryGetAllCharOffersRequest = {
    encode(message, writer = Writer.create()) {
        if (message.charId !== '') {
            writer.uint32(10).string(message.charId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAllCharOffersRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.charId = reader.string();
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
        const message = { ...baseQueryGetAllCharOffersRequest };
        if (object.charId !== undefined && object.charId !== null) {
            message.charId = String(object.charId);
        }
        else {
            message.charId = '';
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
        message.charId !== undefined && (obj.charId = message.charId);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAllCharOffersRequest };
        if (object.charId !== undefined && object.charId !== null) {
            message.charId = object.charId;
        }
        else {
            message.charId = '';
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
const baseQueryGetAllCharOffersResponse = {};
export const QueryGetAllCharOffersResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.OfferContract) {
            OfferContract.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAllCharOffersResponse };
        message.OfferContract = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.OfferContract.push(OfferContract.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryGetAllCharOffersResponse };
        message.OfferContract = [];
        if (object.OfferContract !== undefined && object.OfferContract !== null) {
            for (const e of object.OfferContract) {
                message.OfferContract.push(OfferContract.fromJSON(e));
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
        if (message.OfferContract) {
            obj.OfferContract = message.OfferContract.map((e) => (e ? OfferContract.toJSON(e) : undefined));
        }
        else {
            obj.OfferContract = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAllCharOffersResponse };
        message.OfferContract = [];
        if (object.OfferContract !== undefined && object.OfferContract !== null) {
            for (const e of object.OfferContract) {
                message.OfferContract.push(OfferContract.fromPartial(e));
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
const baseQueryGetOfferContractRequest = { index: '' };
export const QueryGetOfferContractRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetOfferContractRequest };
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
        const message = { ...baseQueryGetOfferContractRequest };
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
        const message = { ...baseQueryGetOfferContractRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetOfferContractResponse = {};
export const QueryGetOfferContractResponse = {
    encode(message, writer = Writer.create()) {
        if (message.OfferContract !== undefined) {
            OfferContract.encode(message.OfferContract, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetOfferContractResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.OfferContract = OfferContract.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetOfferContractResponse };
        if (object.OfferContract !== undefined && object.OfferContract !== null) {
            message.OfferContract = OfferContract.fromJSON(object.OfferContract);
        }
        else {
            message.OfferContract = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.OfferContract !== undefined && (obj.OfferContract = message.OfferContract ? OfferContract.toJSON(message.OfferContract) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetOfferContractResponse };
        if (object.OfferContract !== undefined && object.OfferContract !== null) {
            message.OfferContract = OfferContract.fromPartial(object.OfferContract);
        }
        else {
            message.OfferContract = undefined;
        }
        return message;
    }
};
const baseQueryAllOfferContractRequest = {};
export const QueryAllOfferContractRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllOfferContractRequest };
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
        const message = { ...baseQueryAllOfferContractRequest };
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
        const message = { ...baseQueryAllOfferContractRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllOfferContractResponse = {};
export const QueryAllOfferContractResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.OfferContract) {
            OfferContract.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllOfferContractResponse };
        message.OfferContract = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.OfferContract.push(OfferContract.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllOfferContractResponse };
        message.OfferContract = [];
        if (object.OfferContract !== undefined && object.OfferContract !== null) {
            for (const e of object.OfferContract) {
                message.OfferContract.push(OfferContract.fromJSON(e));
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
        if (message.OfferContract) {
            obj.OfferContract = message.OfferContract.map((e) => (e ? OfferContract.toJSON(e) : undefined));
        }
        else {
            obj.OfferContract = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllOfferContractResponse };
        message.OfferContract = [];
        if (object.OfferContract !== undefined && object.OfferContract !== null) {
            for (const e of object.OfferContract) {
                message.OfferContract.push(OfferContract.fromPartial(e));
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
    GetAllCharOffers(request) {
        const data = QueryGetAllCharOffersRequest.encode(request).finish();
        const promise = this.rpc.request('charactertoken.ctok.offerservice.Query', 'GetAllCharOffers', data);
        return promise.then((data) => QueryGetAllCharOffersResponse.decode(new Reader(data)));
    }
    OfferContract(request) {
        const data = QueryGetOfferContractRequest.encode(request).finish();
        const promise = this.rpc.request('charactertoken.ctok.offerservice.Query', 'OfferContract', data);
        return promise.then((data) => QueryGetOfferContractResponse.decode(new Reader(data)));
    }
    OfferContractAll(request) {
        const data = QueryAllOfferContractRequest.encode(request).finish();
        const promise = this.rpc.request('charactertoken.ctok.offerservice.Query', 'OfferContractAll', data);
        return promise.then((data) => QueryAllOfferContractResponse.decode(new Reader(data)));
    }
}
