/* eslint-disable */
import { Character } from '../charservice/character';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'charactertoken.ctok.charservice';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.characterList) {
            Character.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.characterList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.characterList.push(Character.decode(reader, reader.uint32()));
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
        message.characterList = [];
        if (object.characterList !== undefined && object.characterList !== null) {
            for (const e of object.characterList) {
                message.characterList.push(Character.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.characterList) {
            obj.characterList = message.characterList.map((e) => (e ? Character.toJSON(e) : undefined));
        }
        else {
            obj.characterList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.characterList = [];
        if (object.characterList !== undefined && object.characterList !== null) {
            for (const e of object.characterList) {
                message.characterList.push(Character.fromPartial(e));
            }
        }
        return message;
    }
};
