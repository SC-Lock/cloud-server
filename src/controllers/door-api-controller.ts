import {Request, Response} from 'express';

import {DoorService} from '../services';

export async function getDoor(req: Request, res: Response): Promise<void> {
    const doorId = parseInt(req.params.doorId);
    const door = await DoorService.retrieveDoor(doorId);
    if (door) {
        res.status(200)
            .send(door);
    }
    res.status(404)
        .send(`The door with ID ${doorId} was not found.`)
}

export default {
    getDoor
};
