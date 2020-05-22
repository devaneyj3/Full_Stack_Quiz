const express = require('express');
const cors = require('cors');

const teacherRoutes = require('./api/teacherRoute');
const server = express(); 

server.use(express.json());
server.use(cors());

server.use('/api/teachers', teacherRoutes);

server.get('/', (req, res) => {
    res.status(200).send('The App is working');
})

module.exports = server;