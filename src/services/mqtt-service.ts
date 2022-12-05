import { client } from '../mqtt';

const EVT_CONNECT = 'connect';
const EVT_LISTEN = 'message';
const TOPIC = 'candec-10';

export function init(): void {
    client.on(EVT_CONNECT, () => {
        console.info('App is connected to MQTT broker.');
        client.subscribe([TOPIC], () => {
            console.info(`App is subscribed to topic ${TOPIC}.`);
        });
    });

    handleMsgs();
}

export function handleMsgs(): void {
    // TODO NYI
    client.on(EVT_LISTEN, (topic: string, msg: string) => {
        console.log('Received msg:', topic, msg.toString());
    });
}

export default {
    init,
};
