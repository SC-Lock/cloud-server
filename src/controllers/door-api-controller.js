"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDoor = void 0;
const services_1 = require("../services");
function getDoor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const doorId = parseInt(req.params.doorId);
        const door = yield services_1.DoorService.retrieveDoor(doorId);
        if (door) {
            res.status(200)
                .send(door);
        }
        res.status(404)
            .send(`The door with ID ${doorId} was not found.`);
    });
}
exports.getDoor = getDoor;
exports.default = {
    getDoor
};
