declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            DB_FILE: string;
        }
    }
}

export {};
