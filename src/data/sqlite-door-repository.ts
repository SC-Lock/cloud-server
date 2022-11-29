import { PrismaClient } from '@prisma/client';

import { Door } from '../models';
import { validateDoorExistence } from '../services';

const prisma = new PrismaClient();

export async function readDoor(doorId: number) {
    // TODO type
    await validateDoorExistence(doorId);
    return prisma.door.findUnique({
        where: {
            id: doorId,
        },
    });
}

export async function updateDoor(doorId: number, door: Door) {
    // TODO return type
    await validateDoorExistence(doorId);
    return prisma.door.update({
        where: {
            id: doorId,
        },
        data: door,
    });
}

export default {
    readDoor,
    updateDoor,
};
