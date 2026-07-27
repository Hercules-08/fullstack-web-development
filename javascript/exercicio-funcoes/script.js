function saudacao(nome) {
    return "Olá, " + nome + "!";
}

console.log(saudacao("João"));

const despedida = function(musica) {
    return "Over-gain " + musica + "Over-again";
};
console.log(despedida("Over-again"));

const somar = (a, b) => a + b;

let resultado1 = somar(5, 3);
let resultado2 = somar(20, 15);

console.log(resultado1);
console.log(resultado2);

function multiplicar(a, b = 2) {
    return a * b;
}

console.log(multiplicar(5));
console.log(multiplicar(5,4));

function processarArray(arr, callback) {

    arr.forEach(function(elemento, indice){

        callback(elemento, indice);
    });
}

function maiuscula(elemento, indice){
    console.log(indice + ": " + elemento.toUpperCase());
}

function quadrado(elemento, indice) {
    console.log(indice + ": " + (elemento * elemento));
}

let nomes = ["ana","joao","pedro"];
let numero1 = [2, 4, 6];

processarArray(nomes, maiuscula);

processarArray(numero1, quadrado);


let numeros = [1,2,3,4,5];

let numerosDobrados = numeros.map(function(numero){
    
    return numero * 2;
});

let numerosPares = numeros.filter(function(numero){

    return numero % 2 == 0;

});

let soma = numeros.reduce(function(acumulador, numero){
    return acumulador + numero;

},0);

console.log(numerosDobrados);

console.log(numerosPares);

console.log(soma);

(function(){
    const mensagem = "IIFE executada";

    console.log(mensagem);
})

function fatorial(n){
    if(n === 1){
        return 1;
    }

    return n * fatorial(n - 1);

}

console.log(fatorial(5));

console.log(fatorial(7));
