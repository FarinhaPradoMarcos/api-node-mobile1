const express = require('express');
const produtoService = require('../services/produtoService');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) =>{
    try{
        const produtos = await produtoService.getproduto();//pode ser maiusculo ou min
        res.json(produtos);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

router.post('/', authenticateToken, async(req,res) =>{
    try{

    const { nome, dsc, categoria, preco } = req.body;
    const produto = await produtoService.register(nome, dsc, categoria, preco);
    res.status(201).json(produto);
}
catch(error){
    res.status(400).json({error: error.message});
}
})


module.exports = router;