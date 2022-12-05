import express from 'express';

import { DoorApiController } from '../controllers';

const router = express.Router();

router
    .route('/:doorId')
    .get(DoorApiController.getDoor)
    .patch(DoorApiController.putDoor);

export { router };
