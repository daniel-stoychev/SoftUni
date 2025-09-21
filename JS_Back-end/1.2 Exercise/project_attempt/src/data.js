import fs from 'fs/promises'

const dbSerialized = await fs.readFile('./src/db.json');
const db = JSON.parse(dbSerialized);

export async function getCats() {
    console.log(db.cats);

    return db.cats;
}

export async function saveCat(catData) {
    db.cats.push({
        id: db.cats[db.cats.length - 1].id + 1,
        ...catData
    });
    const dbSerialized = JSON.stringify(db, null, 2);
    await fs.writeFile('./src/db.json', dbSerialized, { encoding: 'utf-8' });
}

