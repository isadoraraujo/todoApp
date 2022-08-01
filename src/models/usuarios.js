class usuarios {
    constructor (idUsuario, nome, email, senha) {
        this.id = idUsuario;
        this.name = nome;
        this.email = email;
        this.senha = senha;
    }
}

export default usuarios

const usuario1 = new usuarios ('1', 'Isadora Araújo', 'isadora@email.com', '12345678')
console.log(usuario1)