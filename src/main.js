import express from 'express'

const app = express()

app.use(express.json())

import {usuarios} from './controllers/usuarios.js'
import {tarefas} from './controllers/tarefas.js'

usuarios(app)
tarefas(app)

app.listen(4000, () => {
    console.log('Servidor rodando')
})