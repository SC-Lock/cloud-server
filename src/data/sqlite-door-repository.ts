import { PrismaClient } from '@prisma/client';

import { NotFoundError } from '../errors';

const prisma = new PrismaClient();

export async function readDoor(doorId: number) {
    // TODO type
    const door = await prisma.door.findUnique({
        where: {
            id: doorId,
        },
    });
    if (!door) throw new NotFoundError(doorId);
    return door;
}

export default {
    readDoor,
};
