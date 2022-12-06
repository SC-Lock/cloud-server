import { Request, Response } from 'express';

import { NotFoundError } from '../errors';
import { Helpers } from './index';
import { DoorLogService } from '../services';

export async function getDoorLogs(req: Request, res: Response): Promise<void> {
    try {
        res.status(200).send(
            await DoorLogService.retrieveDoorLogs(Helpers.getDoorId(req))
        );
    } catch (e) {
        if (e instanceof NotFoundError) {
            res.status(404).send(e.message);
        }
    }
}

export default {
    getDoorLogs,
};
