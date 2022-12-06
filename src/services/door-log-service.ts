import { SqliteDoorLogRepository } from '../data';

export async function retrieveDoorLogs(doorId: number) {
    // TODO return type
    return await SqliteDoorLogRepository.readDoorLogs(doorId);
}

export default {
    retrieveDoorLogs,
};
