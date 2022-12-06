import express from 'express';

import { DoorApiController } from '../controllers';

export const router = express.Router();

router
    .route('/:doorId')
    .get(DoorApiController.getDoor)
    .patch(DoorApiController.putDoor);

export default {
    router,
};
