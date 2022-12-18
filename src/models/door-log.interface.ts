import { Door } from './door.interface';

export interface DoorLog {
    id: number;
    door: Door;
    isLocked: boolean;
    isClosed: boolean;
    isAutomatic: boolean;
    createdAt: string;
}
