'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.NotFoundError = void 0;
class NotFoundError extends Error {
    constructor(id) {
        const msg = `The entity with ID ${id} was not found.`;
        super(msg);
        this.name = this.constructor.name;
        this.id = id;
    }
}
exports.NotFoundError = NotFoundError;
