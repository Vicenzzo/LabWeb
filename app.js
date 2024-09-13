const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/post")
const { where } = require("sequelize")

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", function(req, res) {
    res.render("primeira_pagina")
})

app.post("/cadastrar", function(req, res) {
    post.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
        telefone: req.body.telefone,
        celular: req.body.celular
    }).then(function() {
        res.redirect("/")
    }).catch(function(erro) {
        
    })
})

app.get("/consulta", function(req, res) {
    post.findAll().then(function(posts) {
        res.render("consulta", {posts: posts})
    })
})

app.get("/editar/:id", function(req, res) {
    post.findAll({where: {"id": req.params.id}}).then(function(posts) {
        res.render("editar", {posts: posts})
        console.log(posts)
    })
})

app.get("/excluir", function(req, res) {

})

app.listen(8081, function() {
    console.log("Servidor Ativo!")
})