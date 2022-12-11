import { Door, DoorLogCreate } from '../models';
import { SqliteDoorLogRepository } from '../data';

export async function retrieveDoorLogs(doorId: number) {
    return await SqliteDoorLogRepository.readDoorLogs(doorId);
}

function createDoorLogCreateObject(
    door: Door,
    isAutomatic: boolean
): DoorLogCreate {
    return {
        doorId: door.id,
        isLocked: door.isLocked,
        isAutomatic: isAutomatic,
    };
}

export async function addDoorLog(door: Door, isAutomatic: boolean) {
    return await SqliteDoorLogRepository.createDoorLog(
        createDoorLogCreateObject(door, isAutomatic)
    );
}

export default {
    retrieveDoorLogs,
    addDoorLog,
};
