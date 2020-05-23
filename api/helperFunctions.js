const db = require('./dbQuery');

function dbError(res, unq) {
    if (unq) {
        return res.status(500).json({ message: "There was an error with the database", reason: "You can't enter duplicated data in the database" });
    } else {
        return res.status(500).json({ message: "There was an error with the database" });
    }
}

function getIDFromParams(req) {
    const { id } = req.params;
    return id
}

async function IDNotInDatabase(id) {
    const query = await db.getAll('teachers');
    try {
        const filterByID = query.filter(data =>  data.id === parseInt(id));
        return filterByID;
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    dbError,
    getIDFromParams,
    IDNotInDatabase
}