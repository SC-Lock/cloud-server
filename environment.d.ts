declare global {
    namespace NodeJS {
        interface ProcessEnv {
            EXPRESS_PORT: number;
            MQTT_HOST: string;
            MQTT_PORT: number;
            DB_FILE: string;
            MQTT_USERNAME: string;
            MQTT_PWD: string;
        }
    }
}

export {};
