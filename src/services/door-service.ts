import {SqliteDoorRepository} from '../data';

export function retrieveDoor(doorId: number) { // TODO add return type
    return SqliteDoorRepository.readDoor(doorId);
}

export default {
  retrieveDoor
};
