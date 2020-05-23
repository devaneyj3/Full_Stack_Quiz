
const db = require('../data/db-config');

async function getAll(text) {
    const getEvery = await db(text);
    return getEvery;
}

async function getByID(text, paramsID) {
    const getByID = await db(text).where({ id: paramsID });
    return getByID;
}

async function insert(text, changes) {
    const getByID = await db(text).insert( changes );
    return getByID;
}

async function remove(text, id) {
    const deleteByID = await db(text).where({ id }).del();
    return deleteByID;
}


module.exports = {
    getAll,
    getByID,
    insert,
    remove,
}