import 'dotenv/config';
import express from 'express';

import routers from './routers';
import { MqttService } from './services';

const PORT = process.env.EXPRESS_PORT || 3000;

const app = express();

app.use(express.json());

app.use('/api/doors', routers.DoorRouter);
app.use('/api/doors/:doorId/logs', routers.DoorLogRouter);

app.listen(PORT, () => {
    console.info(`App is listening on port ${PORT}.`);
});

MqttService.init();
