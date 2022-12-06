import express from 'express';

import { DoorLogApiController } from '../controllers';

export const router = express.Router({ mergeParams: true });

router.get('/', DoorLogApiController.getDoorLogs);

export default {
    router,
};
