export class NotFoundError extends Error {
    entityType: string;
    entityId: number;

    constructor(entityType: string, entityId: number) {
        const msg = `The ${entityType} with ID ${entityId} was not found.`;
        super(msg);
        this.name = this.constructor.name;
        this.entityType = entityType;
        this.entityId = entityId;
    }
}
