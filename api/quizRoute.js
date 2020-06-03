const express = require('express');

const quizRoutes = express.Router();

const helper = require('./helperFunctions');

const bd = require('./dbQuery');

const teacherMW = require('./middleware/teachersMW');

//get all quizes
quizRoutes.get('/', async (req, res) => {
    const getQuizes = await bd.getAll('quizes');
    try {

        res.status(200).send(getQuizes);
    }
    catch {
        helper.dbError(res)
    }
})
//post a quiz
quizRoutes.post('/', async (req, res) => {
    const addQuiz = await bd.insert('quizes', req.body);
    try {

        res.status(200).send(addQuiz);
    }
    catch {
        helper.dbError(res)
    }
})
// // GET teacher by ID
// quizRoutes.get('/:id', teacherMW.validateID, async (req, res) => {
//     const paramsID = helper.getIDFromParams(req);
//     try {
//         const teacherByID = await teacherDB.getByID('teachers', paramsID);
//         res.status(201).send(teacherByID)

//     } catch {
//         helper.dbError(res)
//     }
// })

// //GET Quizes by Teacher ID
// quizRoutes.get('/:id/quizes', teacherMW.validateID, async (req, res) => {
//     const paramsID = helper.getIDFromParams(req);
//     try {
//         const teacherByID = await teacherDB.getQuizByTeacherID(paramsID);
//         res.status(201).send(teacherByID)

//     } catch {
//         helper.dbError(res)
//     }
// })


// // POST a new teacher
// quizRoutes.post('/', teacherMW.validateTeacherData, async (req, res) => {
//     //fields must be unique
//     const unq = true
//     try {
//         await teacherDB.insert('teachers', req.body);
//         res.status(201).send(req.body)

//     } catch {
//         helper.dbError(res, unq)
//     }
// })
// //delete a teacher
// quizRoutes.delete('/:id', teacherMW.validateID, async (req, res) => {
//     const paramsID = helper.getIDFromParams(req);
//     try {
//         await teacherDB.remove('teachers', paramsID);
//         res.status(201).json({ message: `You have deleted id ${paramsID}` })

//     } catch {
//         helper.dbError(res)
//     }
// })
// //Edit a teacher based on ID
// quizRoutes.put('/:id', teacherMW.validateID, teacherMW.validateTeacherData, async (req, res) => {
//     const paramsID = helper.getIDFromParams(req);
//     await teacherDB.edit('teachers', paramsID, req.body);
//     try {
//         res.status(201).send(req.body)

//     } catch {
//         helper.dbError(res)
//     }
// })

module.exports = quizRoutes;