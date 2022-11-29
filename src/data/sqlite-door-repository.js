"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDoor = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function readDoor(doorId) {
    return prisma.door.findUnique({
        where: {
            id: doorId
        }
    });
}
exports.readDoor = readDoor;
exports.default = {
    readDoor
};
