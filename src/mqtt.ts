import 'dotenv/config';
import mqtt from 'mqtt';

// https://www.emqx.com/en/blog/how-to-use-mqtt-in-nodejs

const HOST = process.env.MQTT_HOST || 'broker.emqx.io';
const PORT = process.env.MQTT_PORT || 1883;
const USERNAME = process.env.MQTT_USERNAME || 'emqx';
const PWD = process.env.MQTT_PWD || 'public';
const TOPIC = process.env.MQTT_TOPIC || 'candec-10';

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

export function init(): void {
    client.on('connect', () => {
        console.info(`App is connected to MQTT broker on port ${PORT}.`);
        client.subscribe([TOPIC], () => {
            console.info(`App is subscribed to topic ${TOPIC}.`);
        });
    });
}

export default { client, init };
