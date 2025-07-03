import express from "express"

const app = express()
const porta = 8080

app.listen(porta, ()=>{
    console.log("Servidor Rodando")
})
