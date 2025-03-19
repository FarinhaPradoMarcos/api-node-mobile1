const express = require('express');
const userController = require('../src/controllers/userController');
const produtoController = require('../src/controllers/produtoController');

const app = express();
app.use(express.json());
app.use('/api/users', userController);
app.use('/api/produtos', produtoController);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})
