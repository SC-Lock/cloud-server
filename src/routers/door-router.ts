import express from 'express';

import { DoorApiController } from '../controllers';

const router = express.Router();

router.get('/:doorId', DoorApiController.getDoor);

export { router };
