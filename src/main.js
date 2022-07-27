import express from 'express'

const app = express()

import usuarios from './src/controllers/usuarios.js'
import tarefas from './src/controllers/tarefas.js'

usuarios(app)
tarefas(app)

app.listen(4000, () => {
    console.log('Servidor rodando')
})