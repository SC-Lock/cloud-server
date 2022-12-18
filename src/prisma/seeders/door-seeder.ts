import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createDoor(): Promise<void> {
    await prisma.door.create({
        data: {
            isLocked: true,
            isClosed: true,
            unlockCode: '1',
            lockAt: '22:00:00',
            unlockAt: '06:00:00',
        },
    });
}

export async function seed(): Promise<void> {
    await createDoor();
    const doors = await prisma.door.findMany();
    console.info('New state:\n', doors);
}

export default {
    seed,
};
