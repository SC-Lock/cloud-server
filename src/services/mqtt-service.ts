import { Door } from '../models';
import { client } from '../mqtt';
import { DoorLogService, DoorService } from './index';

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

async function handleDoorTopicMsg(doorTopicMsg: string): Promise<void> {
    const doorProps: any = JSON.parse(doorTopicMsg);
    const doorId: number = doorProps.id;
    const isAutomatic = doorProps.isAutomatic ? doorProps.isAutomatic : false;
    delete doorProps.isAutomatic;
    const updatedDoor = await DoorService.modifyDoor(doorId, doorProps);
    DoorLogService.addDoorLog(updatedDoor, isAutomatic);
}

export function handleMsgs(): void {
    client.on(EVT_LISTEN, (topic: string, msg: string) => {
        if (topic === DOOR_TOPIC) {
            try {
                handleDoorTopicMsg(msg);
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
