export class InvalidRequestBodyError extends Error {
    constructor() {
        super('The provided request body is invalid.');
        this.name = this.constructor.name;
    }
}
