import 'dotenv/config';
import { Door } from '../models';
import { client } from '../mqtt';
import { DoorLogService, DoorService } from './index';

const KEEP_ALIVE_INTERVAL = process.env.KEEP_ALIVE_INTERVAL ?? 30000;

const EVT_CONNECT = 'connect';
const EVT_LISTEN = 'message';
const SERVER_TOPIC = 'candec-10-server';
const DOOR_TOPIC = 'candec-10-door';
const CLIENT_TOPIC = 'candec-10-client';
const KEEP_ALIVE_TOPIC = 'candec-10-keep-alive';

let alive = true;
let alreadyDead = false;

function aliveHandler() {
    console.info(alive);
    if (!alive && !alreadyDead) {
        publishConnectionLoss();
        alreadyDead = true;
    }
    alive = false;
}

export function init(): void {
    client.on(EVT_CONNECT, () => {
        console.info('App is connected to MQTT broker.');
        client.subscribe([DOOR_TOPIC, KEEP_ALIVE_TOPIC], () => {
            console.info('App is subscribed to the topics.');
        });
    });

    handleMsgs();

    setInterval(aliveHandler, KEEP_ALIVE_INTERVAL);
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
        } else if (topic === KEEP_ALIVE_TOPIC) {
            alive = true;
            alreadyDead = false;
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

export function publishConnectionLoss() {
    client.publish(
        CLIENT_TOPIC,
        `The door has not connected in the last ${KEEP_ALIVE_INTERVAL} milliseconds.`,
        { qos: 0, retain: false },
        (err) => {
            if (err)
                console.log('Failed to publish the connection loss message.');
        }
    );
}

export default {
    init,
    publishDoor,
};
