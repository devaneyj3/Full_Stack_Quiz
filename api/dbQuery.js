
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

async function edit(text, id, changes) {
    const editByID = await db(text).where({ id }).update({ name: changes.name, username: changes.username, email: changes.email, password: changes.password, class: changes.class });
    return editByID;
}


module.exports = {
    getAll,
    getByID,
    insert,
    remove,
    edit
}