const Sequelize = require("sequelize")
const sequelize = new Sequelize("banco_projeto_ldm_bd", "root", "", {
    host: "localhost",
    dialect: "mysql"
})


sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!")
}).catch(function (erro) {
    console.log("Falha ao se conectar: " + erro)
})



// Agendamentos.create({
//     nome: "Léo",
//     endereco: "Av. Águia de Haia",
//     bairro: "Itaquera",
//     cep: 11111111,
//     cidade: "São Paulo",
//     estado: "SP",
//     telefone: "(11)1111-1111",
//     celular: "(11)99999-9999"
// })


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}