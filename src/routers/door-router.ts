import express from 'express';

import { DoorApiController } from '../controllers';

const router = express.Router();

router
    .route('/:doorId')
    .get(DoorApiController.getDoor)
    .put(DoorApiController.putDoor);

export { router };
