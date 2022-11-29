import express from 'express';

import { DoorApiController } from '../controllers';

const router = express.Router();

router.get('/hello-world', DoorApiController.helloWorld);

export { router };
