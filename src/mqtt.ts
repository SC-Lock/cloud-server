import 'dotenv/config';
import mqtt from 'mqtt';

// https://www.emqx.com/en/blog/how-to-use-mqtt-in-nodejs

const HOST = process.env.MQTT_HOST || 'broker.emqx.io';
const PORT = process.env.MQTT_PORT || 1883;
const USERNAME = process.env.MQTT_USERNAME || 'emqx';
const PWD = process.env.MQTT_PWD || 'public';

const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
const connectUrl = `mqtt://${HOST}:${PORT}`;
export const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: USERNAME,
    password: PWD,
    reconnectPeriod: 1000,
});

export default { client };
