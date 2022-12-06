import { PrismaClient } from '@prisma/client';

import { NotFoundError } from '../errors';

const prisma = new PrismaClient();

export async function validateDoorExistence(doorId: number) {
    // TODO return type
    const door = await prisma.door.findUnique({
        where: {
            id: doorId,
        },
    });
    if (!door) throw new NotFoundError('door', doorId);
}
