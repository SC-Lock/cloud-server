import { Door } from '../models';
import { SqliteDoorRepository } from '../data';
import { MqttService } from './index';

export function retrieveDoor(doorId: number) {
    // TODO type
    return SqliteDoorRepository.readDoor(doorId);
}

export async function modifyDoor(doorId: number, door: Door) {
    // TODO return type
    const updatedDoor = await SqliteDoorRepository.updateDoor(doorId, door);
    MqttService.publishDoor(door);
    return updatedDoor;
}

export default {
    retrieveDoor,
    modifyDoor,
};
