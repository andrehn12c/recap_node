const express = require("express")

const path = require("path")

const app = express()

const caminho = path.join(__dirname, "templates")

app.get('/', (Requisição, resposta) => {
    //resposta.sendFile(`${caminho}/index.html`)
    resposta.send("Estou usando o nodemon!")
})

app.listen(3000, () => {
    console.log("Servidor na porta 3000")
})

