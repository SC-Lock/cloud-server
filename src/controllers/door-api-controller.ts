import { Request, Response } from 'express';

import { InvalidRequestBodyError, NotFoundError } from '../errors';
import { Helpers } from './index';
import { DoorService } from '../services';

export async function getDoor(req: Request, res: Response): Promise<void> {
    try {
        res.status(200).send(
            await DoorService.retrieveDoor(Helpers.getDoorId(req))
        );
    } catch (e) {
        if (e instanceof NotFoundError) {
            res.status(404).send(e.message);
        }
    }
}

export async function putDoor(req: Request, res: Response): Promise<void> {
    try {
        const doorProps = req.body;
        const updatedDoor = await DoorService.modifyDoor(
            Helpers.getDoorId(req),
            doorProps
        );
        res.status(200).send(updatedDoor);
    } catch (e) {
        if (e instanceof InvalidRequestBodyError) {
            res.status(400).send(e.message);
        } else if (e instanceof NotFoundError) {
            res.status(404).send(e.message);
        }
    }
}

export default {
    getDoor,
    putDoor,
};
