import { Door } from '../models';
import { client } from '../mqtt';
import { DoorService } from './index';

const EVT_CONNECT = 'connect';
const EVT_LISTEN = 'message';
const SERVER_TOPIC = 'candec-10-server';
const DOOR_TOPIC = 'candec-10-door';

export function init(): void {
    client.on(EVT_CONNECT, () => {
        console.info('App is connected to MQTT broker.');
        client.subscribe(DOOR_TOPIC, () => {
            console.info(`App is subscribed to topic ${DOOR_TOPIC}.`);
        });
    });

    handleMsgs();
}

export function handleMsgs(): void {
    client.on(EVT_LISTEN, (topic: string, msg: string) => {
        if (topic === DOOR_TOPIC) {
            try {
                const doorProps: any = JSON.parse(msg);
                const doorId: number = doorProps.id;
                const isAutomatic = doorProps.isAutomatic
                    ? doorProps.isAutomatic
                    : false;
                delete doorProps.isAutomatic;
                DoorService.modifyDoor(doorId, doorProps, isAutomatic);
            } catch (e) {
                console.log('Failed to update the door.');
            }
        }
    });
}

export function publishDoor(door: Door): void {
    client.publish(
        SERVER_TOPIC,
        JSON.stringify(door),
        { qos: 0, retain: false },
        (err) => {
            if (err) console.log('Failed to publish the door.');
        }
    );
}

export default {
    init,
    publishDoor,
};
