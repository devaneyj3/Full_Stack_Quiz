const express = require('express');

const routes = express.Router();

const helper = require('./helperFunctions');

const db = require('./dbQuery');

const bcrypt = require('bcrypt');


//get all admin
routes.post('/', async (req, res) => {
    const credentials = req.body;
    const unq = true

    //use bcrypt to hash password
    const hash = bcrypt.hashSync(credentials.password, 10)
    credentials.password = hash;

    try {
        await db.insert('admin', credentials)
        res.status(201).send(credentials)
    } catch  {
        helper.dbError(res, unq)
    }
})
routes.get('/', async (req, res) => {
    const getAdmin = await db.getAll('admin');
    try {
        if (getAdmin.length > 0) {
            res.status(200).send(getAdmin);
        } else {
            res.status(404).json({ message: "There are no admins" });
        }
    }
    catch {
        helper.dbError(res)
    }
})
//log in as admin
routes.post('/login', async (req, res) => {
    const credentials = req.body;
    const admin = await db.getAdmin(credentials.username);
    try {

        // make json web token and log in by checking hash password
        if (admin && !bcrypt.compareSync(credentials.password, admin.password)) {
            res.status(404).json({ message: 'Invalid Credentials' })
        } else if (bcrypt.compareSync(credentials.password, admin.password)) {
            const authToken = helper.generateToken(admin)
            res.status(200).json({ message: 'You are logged in', data: admin, authToken });
        }
        else {
            helper.NotInDatabase(res, 'admin', null, username)
        }
    }
    catch {
        helper.dbError(res)
    }
})

module.exports = routes;