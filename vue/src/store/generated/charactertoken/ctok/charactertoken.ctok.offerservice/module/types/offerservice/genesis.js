/* eslint-disable */
import { OfferContract } from '../offerservice/offer_contract';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'charactertoken.ctok.offerservice';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.offerContractList) {
            OfferContract.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.offerContractList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.offerContractList.push(OfferContract.decode(reader, reader.uint32()));
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
        message.offerContractList = [];
        if (object.offerContractList !== undefined && object.offerContractList !== null) {
            for (const e of object.offerContractList) {
                message.offerContractList.push(OfferContract.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.offerContractList) {
            obj.offerContractList = message.offerContractList.map((e) => (e ? OfferContract.toJSON(e) : undefined));
        }
        else {
            obj.offerContractList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.offerContractList = [];
        if (object.offerContractList !== undefined && object.offerContractList !== null) {
            for (const e of object.offerContractList) {
                message.offerContractList.push(OfferContract.fromPartial(e));
            }
        }
        return message;
    }
};
