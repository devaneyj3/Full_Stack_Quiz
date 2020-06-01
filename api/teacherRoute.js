const express = require('express');

const routes = express.Router();

const helper = require('./helperFunctions');

const teacherDB = require('./dbQuery');

const teacherMW = require('./middleware/teachersMW');

//get all teachers
routes.get('/', async (req, res) => {
    const getTeachers = await teacherDB.getAll('teachers');
    try {
        if (getTeachers.length > 0) {
            res.status(200).send(getTeachers);
        } else {
            res.status(404).json({ message: "There are no teachers" });
        }
    }
    catch {
        helper.dbError(res)
    }
})
// GET teacher by ID
routes.get('/:id', teacherMW.validateID, async (req, res) => {
    const paramsID = helper.getIDFromParams(req);
    try {
        const teacherByID = await teacherDB.getByID('teachers', paramsID);
        res.status(201).send(teacherByID)

    } catch {
        helper.dbError(res)
    }
})

//GET Quizes by Teacher ID
routes.get('/:id/quizes', teacherMW.validateID, async (req, res) => {
    const paramsID = helper.getIDFromParams(req);
    try {
        const teacherByID = await teacherDB.getQuizByTeacherID(paramsID);
        res.status(201).send(teacherByID)

    } catch {
        helper.dbError(res)
    }
})


// POST a new teacher
routes.post('/', teacherMW.validateTeacherData, async (req, res) => {
    //fields must be unique
    const unq = true
    try {
        await teacherDB.insert('teachers', req.body);
        res.status(201).send(req.body)

    } catch {
        helper.dbError(res, unq)
    }
})
//delete a teacher
routes.delete('/:id', teacherMW.validateID, async (req, res) => {
    const paramsID = helper.getIDFromParams(req);
    try {
        await teacherDB.remove('teachers', paramsID);
        res.status(201).json({ message: `You have deleted id ${paramsID}` })

    } catch {
        helper.dbError(res)
    }
})
//Edit a teacher based on ID
routes.put('/:id', teacherMW.validateID, teacherMW.validateTeacherData, async (req, res) => {
    const paramsID = helper.getIDFromParams(req);
    await teacherDB.edit('teachers', paramsID, req.body);
    try {
        res.status(201).send(req.body)

    } catch {
        helper.dbError(res)
    }
})

module.exports = routes;