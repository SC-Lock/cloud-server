export interface Door {
    id: number;
    unlockCode: string;
    isLocked: boolean;
    isClosed: boolean;
    lockAt: string;
    unlockAt: string;
}
