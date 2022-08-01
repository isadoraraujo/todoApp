class tarefas {
    constructor(idTarefa, idUsuario, descricao, status, dataCriacao) {
        this.id = idTarefa;
        this.userId = idUsuario;
        this.text = descricao;
        this.status = status;
        this.date = dataCriacao;
    }
}

export default tarefas

const tarefa1 = new tarefas ('1', '1', 'fazer qualified', 'em andamento', '02/02/22')
console.log(tarefa1)