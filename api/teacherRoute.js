const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.status(200).send('Teacher Route is working');
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