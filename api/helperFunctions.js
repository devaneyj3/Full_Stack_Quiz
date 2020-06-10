const db = require('./dbQuery');

const token = require('jsonwebtoken');
const jwt = require('./jwttoken');

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


async function NotInDatabase(res, text, id, username) {
    const query = await db.getAll(text);
    try {
        if (id) {
            const filterData = query.filter(data => data.id === parseInt(id));
            displayMessage(res, filterData)
        }
        else if (username) {
            const filterData = query.filter(data => data.username === username);
            displayMessage(res, filterData)
        }
    }
    catch (err) {
        console.error(err)
    }

}

function displayMessage(res, filterData) {
    if (filterData.length < 1) {
        res.status(404).json({ message: "User not in Database" })
    }
}

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1hr'
    }
    return token.sign(payload, jwt.jwtSecret, options)

}

module.exports = {
    dbError,
    getIDFromParams,
    NotInDatabase,
    generateToken
}