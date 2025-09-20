import fs from 'fs/promises'

const dbSerialized = await fs.readFile('./src/db.json');
const db = JSON.parse(dbSerialized);

export async function getCats() {
    return db.cats;
}

