import express from "express"

const app = express()
const porta = 8080

app.use("/", (req, res)=>{
    res.send("<h1>Olá App</h1>")
})

app.listen(porta, ()=>{
    console.log("Servidor Rodando")
})
