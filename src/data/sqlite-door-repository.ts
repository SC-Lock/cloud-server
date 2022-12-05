import { PrismaClient } from '@prisma/client';

import { InvalidRequestBodyError } from '../errors';
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

export async function updateDoor(doorId: number, doorProps: any) {
    // TODO return type
    await validateDoorExistence(doorId);
    try {
        return await prisma.door.update({
            where: {
                id: doorId,
            },
            data: doorProps,
        });
    } catch (e) {
        throw new InvalidRequestBodyError();
    }
}

export default {
    readDoor,
    updateDoor,
};
