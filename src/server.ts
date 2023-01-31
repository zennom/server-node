import express from 'express'
import mainRoutes from './routes/index'

const server = express()

server.use(mainRoutes)


server.use((req,res) =>{
    res.status(404).send("Página não encontrada")
})


server.listen(3000)