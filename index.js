const express = require('express');

const server = require('./sever');

const app = express();

app.use(server);

const PORT = 5434;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})