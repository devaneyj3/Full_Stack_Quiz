const helper = require('../helperFunctions'); 

async function validateAdmin (req, res, next) { 
    if (req.body.username === 'devaneyj3' && req.body.password === 'Lambda'){
        next()
    }
        else {
        res.status(400).json({message: "You entered the wrong admin credentials"})
    }
}

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
    } else if (req.body.name === '' || req.body.username === '' || req.body.email === '' || req.body.password === '' || req.body.class === '') {
        res.status(400).json({message: 'You need text in every field'})
    }
    else {
        next()
    }
}


module.exports = {
    validateID,
    validateTeacherData,
    validateAdmin
}