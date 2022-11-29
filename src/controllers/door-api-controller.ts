import { Request, Response } from 'express';

import { NotFoundError } from '../errors';
import { DoorService } from '../services';

export async function getDoor(req: Request, res: Response): Promise<void> {
    try {
        const doorId = parseInt(req.params.doorId);
        res.status(200).send(await DoorService.retrieveDoor(doorId));
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(400).send(err.message);
        }
    }
}

export default {
    getDoor,
};
