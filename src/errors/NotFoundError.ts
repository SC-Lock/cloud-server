export class NotFoundError extends Error {
    id: number;

    constructor(id: number) {
        const msg = `The entity with ID ${id} was not found.`;
        super(msg);
        this.name = this.constructor.name;
        this.id = id;
    }
}
