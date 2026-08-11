let botaoMostrar = document.querySelector("#btnMostrar");
let painel = document.querySelector("#painel");
let texto = document.querySelector("#texto");
let caixas = document.querySelectorAll(".caixa");
let btnTexto = document.querySelector("#btnTexto");
let formulario = document.querySelector("#formulario");
let inputNome = document.querySelector("#nome");
let resultado = document.querySelector("#resultado");

botaoMostrar.addEventListener("click", function() {
    painel.classList.toggle("hidden")
});

btnTexto.addEventListener("click", function() {
    texto.textContent = "Este é o novo texto"
});

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = inputNome.value;
    
    resultado.textContent = "Olá, " + nome + "!"; 
});

caixas.forEach(function(caixa) {

    caixa.addEventListener("mouseover", function() {
        caixa.classList.add("destacado");
    });

    caixa.addEventListener("mouseout", function() {
        caixa.classList.remove("destacado");
    });
});

