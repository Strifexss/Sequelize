(async () => {

    const database = require('./db')
    const Produto = require('./produto')
    await database.sync();

   /*Criar Novos Elementos*/ 
   /*const novoProduto = await Produto.create({
        nome: "Mesa Digitalizadora",
        preço: 200,
        descricao: 'Uso Profissional'
    })
    console.log(novoProduto); */

    const produto = await Produto.findByPk(4);
    console.log(produto)

    /*Update*/
    /*produto.nome = 'Mesa Digitalizadora Wacom';
    await produto.save();*/

    /*await produto.destroy()*/
})();