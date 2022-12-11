import { SqliteDoorRepository } from '../data';
import { DoorLogService, MqttService } from './index';

export function retrieveDoor(doorId: number) {
    return SqliteDoorRepository.readDoor(doorId);
}

export async function modifyDoor(
    doorId: number,
    doorProps: any,
    isAutomatic: boolean
) {
    const updatedDoor = await SqliteDoorRepository.updateDoor(
        doorId,
        doorProps
    );
    MqttService.publishDoor(updatedDoor);
    DoorLogService.addDoorLog(updatedDoor, isAutomatic);
    return updatedDoor;
}

export default {
    retrieveDoor,
    modifyDoor,
};
