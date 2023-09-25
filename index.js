const express = require("express")

const app = express()

app.get('/', (Requisição, resposta) => {
    resposta.send("Seja bem-vindo ao meu servidor!")
})

app.listen(3000, () => {
    console.log("Servidor na porta 3000")
})

