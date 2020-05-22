const express = require('express');

const routes = express.Router();

const helper = require('./helperFunctions');

const db = require('../data/db-config');

//get all teachers
routes.get('/', async(req, res) => {
    const getTeachers = await db('teachers');
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

// routes.post('/', (req, res) => {
//     res.status(201).send(stuff)
// })

// routes.delete('/', (req, res) => {
//     res.status(204).send(stuff)
// })

// routes.put('/', (req, res) => {
//     res.status(200).send(stuff)
// })

module.exports = routes;