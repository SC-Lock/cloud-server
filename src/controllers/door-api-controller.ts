import { Request, Response } from 'express';

import { InvalidRequestBodyError, NotFoundError } from '../errors';
import { DoorService } from '../services';

function getDoorId(req: Request): number {
    return parseInt(req.params.doorId);
}

export async function getDoor(req: Request, res: Response): Promise<void> {
    try {
        res.status(200).send(await DoorService.retrieveDoor(getDoorId(req)));
    } catch (e) {
        console.error(e);
        if (e instanceof NotFoundError) {
            res.status(404).send(e.message);
        }
    }
}

export async function putDoor(req: Request, res: Response): Promise<void> {
    try {
        const door = req.body;
        const updatedDoor = await DoorService.modifyDoor(getDoorId(req), door);
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
