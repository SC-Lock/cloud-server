import express from 'express';

import { DoorMonitorController } from '../controllers';

export const router = express.Router({ mergeParams: true });

router.get('/dashboard', DoorMonitorController.getDashboard);

export default {
    router,
};
