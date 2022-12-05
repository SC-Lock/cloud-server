import { Door } from '../models';
import { SqliteDoorRepository } from '../data';
import { MqttService } from './index';

export function retrieveDoor(doorId: number) {
    // TODO type
    return SqliteDoorRepository.readDoor(doorId);
}

export async function modifyDoor(doorId: number, doorProps: any) {
    // TODO return type
    const updatedDoor = await SqliteDoorRepository.updateDoor(doorId, doorProps);
    MqttService.publishDoor(doorProps);
    return updatedDoor;
}

export default {
    retrieveDoor,
    modifyDoor,
};
