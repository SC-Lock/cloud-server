import { Request, Response } from 'express';

import { NotFoundError } from '../errors';
import { Helpers } from './index';
import { DoorLogService } from '../services';

export async function getDashboard(req: Request, res: Response): Promise<void> {
    try {
        res.render('dashboard', {
            doorLogs: await DoorLogService.retrieveDoorLogs(
                Helpers.getDoorId(req)
            ),
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
