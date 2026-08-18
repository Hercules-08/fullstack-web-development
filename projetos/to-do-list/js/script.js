let formulario = document.querySelector("#formulario");
let inputTarefa = document.querySelector("#inputTarefa");
let listaTarefas = document.querySelector("#listaTarefas");
let mensagemErro = document.querySelector("#mensagemErro");

let [];

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const texto = inputTarefa.value;

    const novaTarefa = {
        texto: texto,
        concluida: false
    };

    listaTarefas.push(novaTarefa);
});
