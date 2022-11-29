'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.retrieveDoor = void 0;
const data_1 = require('../data');
function retrieveDoor(doorId) {
    return data_1.SqliteDoorRepository.readDoor(doorId);
}
exports.retrieveDoor = retrieveDoor;
exports.default = {
    retrieveDoor,
};
