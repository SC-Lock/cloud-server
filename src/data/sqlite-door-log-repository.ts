import { PrismaClient } from '@prisma/client';

import { DoorLogCreate } from '../models';
import { validateDoorExistence } from '../services';

const prisma = new PrismaClient();

export async function readDoorLogs(doorId: number) {
    await validateDoorExistence(doorId);
    return await prisma.doorLog.findMany({
        where: {
            doorId: doorId,
        },
        select: {
            id: true,
            isLocked: true,
            isAutomatic: true,
            createdAt: true,
            door: true,
        },
    });
}

export async function createDoorLog(doorLogCreateObject: DoorLogCreate) {
    try {
        return await prisma.doorLog.create({
            data: doorLogCreateObject,
        });
    } catch (e) {
        console.log('Failed to create the door log.');
    }
}

export default {
    readDoorLogs,
    createDoorLog,
};
