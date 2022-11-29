import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export function readDoor(doorId: number) { // TODO add return type
    return prisma.door.findUnique({
       where: {
           id: doorId
       }
    });
}

export default {
    readDoor
};
