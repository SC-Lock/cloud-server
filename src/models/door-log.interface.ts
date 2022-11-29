import { Door } from './door.interface';

export interface DoorLog {
    id: number;
    door: Door;
    isLocked: boolean;
    isAutomatic: boolean;
    createdAt: string;
}
