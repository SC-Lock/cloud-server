export interface Door {
    id: number;
    unlockCode: string;
    isLocked: boolean;
    isOpen: boolean;
    lockAt: string;
    unlockAt: string;
}
