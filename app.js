const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")


const { initializeApp, applicationDefault, cert } = equire('firebase-admin/app')
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore')

const serviceAccount = require("./teste-48000-firebase-adminsdk-kz83t-832d312de7.json")

initializeApp({
    credential: cert(serviceAccount)
})

const db = getFirestore()


app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", function (req, res) {
    res.render("primeira_pagina")
})

app.post("/cadastrar", function (req, res) {
    var result = db.collection("clientes").add({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao
    }).then(function () {
        console.log("Dados cadastrados com sucesso!")
    })
})

app.listen(8081, function () {
    console.log("Servidor ativo!")
})