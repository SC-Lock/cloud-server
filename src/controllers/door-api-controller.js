"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
function helloWorld(req, res) {
    res.status(200)
        .send('Hello, World!');
}
exports.helloWorld = helloWorld;
exports.default = {
    helloWorld
};
