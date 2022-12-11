import { Request, Response } from 'express';

import { NotFoundError } from '../errors';
import { Helpers } from './index';
import { DoorLogService, DoorService } from '../services';

export async function getDashboard(req: Request, res: Response): Promise<void> {
    try {
        const doorId = Helpers.getDoorId(req);
        res.render('dashboard', {
            door: await DoorService.retrieveDoor(doorId),
            doorLogs: await DoorLogService.retrieveDoorLogs(doorId),
        });
    } catch (e) {
        if (e instanceof NotFoundError) {
            res.render('not-found', {
                errMsg: e.message,
            });
        }
    }
}

export default {
    getDashboard,
};
