import { Door } from '../models';
import { SqliteDoorRepository } from '../data';

export function retrieveDoor(doorId: number) {
    // TODO type
    return SqliteDoorRepository.readDoor(doorId);
}

export function modifyDoor(doorId: number, door: Door) {
    // TODO return type
    return SqliteDoorRepository.updateDoor(doorId, door);
}

export default {
    retrieveDoor,
    modifyDoor,
};
