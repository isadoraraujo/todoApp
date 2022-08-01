export const usuarios = (app) => {
    app.get('/usuarios', (req, res) => {
        res.send('Rota ativada com GET e recurso USUARIO: valores de USUARIO devem ser retornados')
    })

    app.post('/usuarios', (req, res) => {
        res.send(`O usuário ${req.body.name} foi criado.`)
    })
}