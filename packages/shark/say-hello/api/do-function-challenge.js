"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerShark = void 0;
const axios_1 = __importDefault(require("axios"));
const URL_DO_FUNCTIONS_CHALLENGE_API = 'https://functionschallenge.digitalocean.com/api/sammy';
const registerShark = async (sharkName, sharkType) => {
    const oParam = {
        name: sharkName,
        type: sharkType
    };
    const { data } = await axios_1.default.post(URL_DO_FUNCTIONS_CHALLENGE_API, oParam, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    return data;
};
exports.registerShark = registerShark;
