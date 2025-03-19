const Produto = require('../models/produto');

class ProdutoRepository{
    async createProduto(produto){
        return await Produto.create(produto);
    }

    async findByProdutoNome(nome){
        return await Produto.findOne({where: {nome}})
    }

    async findAll(){
        return await Produto.findAll();
    }
}

module.exports = new ProdutoRepository();