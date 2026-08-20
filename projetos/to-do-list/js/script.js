let formulario = document.querySelector("#formulario");
let inputTarefa = document.querySelector("#inputTarefa");
let listaTarefas = document.querySelector("#listaTarefas");
let mensagemErro = document.querySelector("#mensagemErro");

let tarefas = [];

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const texto = inputTarefa.value;

    if (texto.trim() === "") {

        mensagemErro.textContent = "A tarefa não pode estar vazia.";

        return;
    }

    mensagemErro.textContent = "";

    const novaTarefa = {
        texto: texto,
        concluida: false
    };

    tarefas.push(novaTarefa);

    inputTarefa.value = "";

    mostrarTarefas();
    
}); 
    function mostrarTarefas() {
        listaTarefas.innerHTML = "";

        tarefas.forEach(function(tarefa, indice) {
            const li = document.createElement("li");

            li.textContent = tarefa.texto;

            if (tarefa.concluida) {
                li.classList.add("concluida");
            }

            li.addEventListener("click", function() {
                tarefa.concluida = !tarefa.concluida;

                mostrarTarefas();
            });

            const botaoRemover = document.createElement("button");

            botaoRemover.textContent = "Remover";

            botaoRemover.addEventListener("click", function(event) {
                event.stopPropagation();

                tarefas.splice(indice, 1);

                mostrarTarefas();
            });

            li.appendChild(botaoRemover);

            listaTarefas.appendChild(li);
    }
)};
