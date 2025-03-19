const bcrypt = require('bcrypt');
const produtoRepository = require('../repositories/produtoRepository');
const { v4: UUIDV4 } = require('uuid');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'SUACHAVESECRETA';

class produtoService{
    async register(nome, dsc, categoria, preco){
        const getproduto = await this.getByProdutoName(nome);
        console.log(getproduto);
        if(getproduto){
            throw new Error('Produto já cadastrado');
        }
        const produto = await produtoRepository.createProduto({id: UUIDV4(), nome, dsc, categoria, preco});
        return produto;

    }

    async getByProdutoName(nome){
        return await produtoRepository.findByProdutoNome(nome);
    }



    async getproduto(){
        return await produtoRepository.findAll();
    }
}

module.exports = new produtoService();