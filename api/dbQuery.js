
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
    const getByID = await db(text).insert(changes);
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

async function getQuizByTeacherID(id) {
    const teacherID = await getByID('teachers', id)
    if (teacherID) {
        return db('quizes as q')
            .join('teachers as t', 'q.teacher_id', 't.id')
            .where('q.teacher_id', id)
            .select('t.class', 'q.name', 'q.teacher_id')
    }
    return teacherID;
}
async function getAdmin(username) {
    const getByUser = await db('admin').where({ 'username': username }).first();
    return getByUser;
}


module.exports = {
    getAll,
    getByID,
    insert,
    remove,
    edit,
    getQuizByTeacherID,
    getAdmin
}