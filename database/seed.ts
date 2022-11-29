// @ts-ignore
import DoorSeeder from './door-seeder';

async function run(): Promise<void> {
    await DoorSeeder.seed();
}

run()
    .then(() => console.info('The database was successfully seeded.'))
    .catch((err) => console.error('Failed to seed the database.'));
