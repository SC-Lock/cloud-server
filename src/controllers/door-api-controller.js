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
const errors_1 = require("../errors");
const services_1 = require("../services");
function getDoor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const doorId = parseInt(req.params.doorId);
            res.status(200)
                .send(yield services_1.DoorService.retrieveDoor(doorId));
        }
        catch (err) {
            if (err instanceof errors_1.NotFoundError) {
                res.status(400)
                    .send(err.message);
            }
        }
    });
}
exports.getDoor = getDoor;
exports.default = {
    getDoor
};
