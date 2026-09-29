class Tarefa {

    constructor(titulo, prioridade)
     {
        this.titulo = titulo;

        this.prioridade = prioridade;

        this.status = "pendente";
        
    }

    concluir(){

        this.status = "concluida";
    }

    reabrir(){
        
        this.status = "pendente";
    }
}

class Projeto {

    constructor(nome, descricao) {

        this.nome = nome;

        this.descricao = descricao;


        this.tarefas = [];

        this.status = "Em andamento";
    }

    adicionarTarefa(tarefa){
        this.tarefas.push(tarefa);
    }

    removerTarefa(titulo){
        
        this.tarefas = this.tarefas.filter(tarefa => tarefa.titulo !== titulo);

    }

    listarTarefas(){
        this.tarefas.forEach(tarefa => {

            console.log(tarefa.titulo);

            console.log(tarefa.prioridade);

            console.log(tarefa.status);

        })
    }

    atualizarStatus(){

        const todasConcluidas = this.tarefas.every(
            tarefa => tarefa.status === "concluida"
        );

        if(todasConcluidas) {

            this.status = "concluido";

        }
        
        else{
            this.status = "em andamento";

        }
        
    }

}

const projetos = [];

let projetoAtual = null;

const nomeProjetoInput = document.getElementById("nomeProjeto");

const descricaoInput = document.getElementById("descricao");

const btnAdicionarProjeto = document.getElementById("btnAdicionarProjeto");

const listaProjetos = document.getElementById("listaProjetos");

const novaTarefaInput = document.getElementById("novaTarefa");

const prioridadeInput = document.getElementById("prioridade");

const btnAdicionarTarefa = document.getElementById("btnAdicionarTarefa");



btnAdicionarProjeto.addEventListener("click", ()=> {

    const nome = nomeProjetoInput.value;

    const descricao = descricaoInput.value;

    const novoProjeto = new Projeto(nome, descricao);

    projetos.push(novoProjeto);

    projetoAtual = novoProjeto;

    mostrarProjetos();

});

btnAdicionarTarefa.addEventListener("click", ()=> {

    if(projetoAtual === null){

        alert("Primeiro crie um projeto.");

        return;
    }

    const titulo = novaTarefaInput.value;

    const prioridade = prioridadeInput.value;

    const tarefa = new Tarefa(

        titulo,
        prioridade
    );

    projetoAtual.adicionarTarefa(tarefa);

    projetoAtual.atualizarStatus();

    mostrarProjetos();

    novaTarefaInput.value = "";
});

function mostrarProjetos(){

    listaProjetos.innerHTML = "";

    projetos.forEach((projeto)=> {
        let html = `
        <div class="projeto">
        
        <h3>${projeto.nome}</h3>

        <p>${projeto.descricao}</p>

        <p>Status: ${projeto.status}</p>

        <ul>


        `;

        projeto.tarefas.forEach((tarefa, indice)=> {

            html += `
            
            <li>

            ${tarefa.titulo}
            -
            ${tarefa.prioridade}
            -
            ${tarefa.status}

            <button onclick="concluirTarefa(${indice})">

                Concluir

            </button>

            <button onclick="reabrirTarefa(${indice})">

                Reabrir

            </button>

            </li>

            `;
        });

        html += `
        </ul>
        
        </div>

        `;

        listaProjetos.innerHTML += html;

    });
}

function concluirTarefa(indice){

    projetoAtual.tarefas[indice].concluir();

    projetoAtual.atualizarStatus();

    mostrarProjetos();
}

function reabrirTarefa(indice){
    
    projetoAtual.tarefas[indice].reabrir();

    projetoAtual.atualizarStatus();

    mostrarProjetos();

}