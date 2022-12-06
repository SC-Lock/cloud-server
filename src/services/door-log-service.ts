import { Door, DoorLogCreate } from '../models';
import { SqliteDoorLogRepository } from '../data';

export async function retrieveDoorLogs(doorId: number) {
    // TODO return type
    return await SqliteDoorLogRepository.readDoorLogs(doorId);
}

function createDoorLogCreateObject(door: Door): DoorLogCreate {
    return {
        doorId: door.id,
        isLocked: door.isLocked,
        isAutomatic: false,
    };
}

export async function addDoorLog(door: Door) {
    // TODO return type
    return await SqliteDoorLogRepository.createDoorLog(
        createDoorLogCreateObject(door)
    );
}

export default {
    retrieveDoorLogs,
    addDoorLog,
};
