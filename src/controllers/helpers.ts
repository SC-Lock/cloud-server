import { Request } from 'express';

export function getDoorId(req: Request): number {
    return parseInt(req.params.doorId);
}

export default {
    getDoorId,
};
