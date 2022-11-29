import {SqliteDoorRepository} from '../data';

export function retrieveDoor(doorId: number) { // TODO type
    return SqliteDoorRepository.readDoor(doorId);
}

export default {
  retrieveDoor
};
