import 'dotenv/config';
import express from 'express';

import routers from './routers';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/api/doors', routers.DoorRouter);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
