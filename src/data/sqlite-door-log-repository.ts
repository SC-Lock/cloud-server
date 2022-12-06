import { PrismaClient } from '@prisma/client';

import { validateDoorExistence } from '../services';

const prisma = new PrismaClient();

export async function readDoorLogs(doorId: number) {
    // TODO return type
    await validateDoorExistence(doorId);
    return await prisma.doorLog.findMany({
        where: {
            id: doorId,
        },
    });
}

export default {
    readDoorLogs,
};
