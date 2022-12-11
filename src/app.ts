import 'dotenv/config';
import path from 'path';
import express from 'express';

import routers from './routers';
import { MqttService } from './services';

const PORT = process.env.EXPRESS_PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/api/doors', routers.DoorRouter);
app.use('/api/doors/:doorId/logs', routers.DoorLogRouter);
app.use('/doors/:doorId/monitor', routers.DoorMonitorRouter);

app.listen(PORT, () => {
    console.info(`App is listening on port ${PORT}.`);
});

MqttService.init();
