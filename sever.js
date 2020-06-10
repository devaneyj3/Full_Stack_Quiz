const express = require('express');
const cors = require('cors');

const teacherRoutes = require('./api/teacherRoute');
const quizesRoute = require('./api/quizRoute');
const adminRoutes = require('./api/adminRoute');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/admin', adminRoutes);
server.use('/api/teachers', teacherRoutes);
server.use('/api/quizes', quizesRoute);

server.get('/', (req, res) => {
    res.status(200).send('The App is working');
})

module.exports = server;