const helper = require('../helperFunctions')

async function validateID (req, res, next) { 
    const { id } = req.params;
    const checkIfIDinDB = await helper.IDNotInDatabase(id)
    if (checkIfIDinDB.length > 0) {
        next()
    }
        else {
        res.status(400).json({message: "This ID is not in the database"})
    }
}

async function validateTeacherData(req, res, next) {
    if (Object.keys(req.body).length < 1) {
        res.status(400).json({
            message: "Missing data fields"})
    } else {
        next()
    }
}


module.exports = {
    validateID,
    validateTeacherData
}