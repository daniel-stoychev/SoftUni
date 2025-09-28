import fs from 'fs/promises'

const dbSerialized = await fs.readFile('./src/db.json');
const db = JSON.parse(dbSerialized);

export async function getCats() {
    // console.log(db.cats);
    return db.cats;
}

export async function getCat(id) {
    return db.cats.find(cat => cat.id === id);
}

export async function saveCat(catData) {
    db.cats.push({
        id: db.cats[db.cats.length - 1].id + 1,
        ...catData
    });

    await saveDb();
}

export async function editCat(catId, catData) {
    db.cats = db.cats.map(cat => cat.id === catId ? { id: catId, ...catData } : cat);
    await saveDb();
}

export async function deleteCat(catId) {
    db.cats = db.cats.filter(cat => cat.id !== catId);
    await saveDb();
}

export async function addBreed(breed) {
    db.breeds.push(breed);
    await saveDb();
}

export async function getBreeds() {
    // console.log(db.cats);
    return db.breeds;
}


async function saveDb() {
    const dbSerialized = JSON.stringify(db, null, 2);
    await fs.writeFile('./src/db.json', dbSerialized, { encoding: 'utf-8' });
}