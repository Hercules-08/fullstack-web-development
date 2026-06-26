const nome = "Peter";
const identificador = 852;
const verdade = true;
const vazia = null;
const nãoDefinida = undefined;

let jogo = "God of War";
let codigo = 789;
let falso = false;
let empty = null;
let semDefinicao = undefined;

let simbolo1 = Symbol("Uma descrição muito foda.")
    console.log(typeof simbolo1);

let dados = [
    "Peter",
    29,
    62.5,
    true,
    null
];
console.log(typeof dados[0]);
console.log(dados.length);
for (let i = 0; i < dados.length; i++) {
    console.log(dados[i]);
}

let cadastro = {
    nome:"Peter",
    idade: 30,
    ativo: true
};

console.log(cadastro.nome);
console.log(cadastro.idade);

let maiorIdade = 18;

if(maiorIdade >= 18) {
    console.log("Você é maior de idade!");
}else {
    console.log("Você é menor de idade!");
};

let dias = 6;
let diaSemana;
switch(dias) {
    case 1:
        diaSemana = "Hoje é final de semana";
        break;
    case 2:
        diaSemana = "Segunda-feira";
        break;
    case 3:
        diaSemana = "Terça-feira";
        break;
    case 4:
        diaSemana = "Quarta-feira";
        break;
    case 5:
        diaSemana = "Quinta-feira";
        break;
    case 6:
        diaSemana = "Sextou, Carai";
        break;
    case 7:
        diaSemana = "Hoje é final de semana";
        break;
    default:
        diaSemana = "Dia inválido"
}
console.log(diaSemana)

let numero = 1;

while (numero <= 10) {
    console.log(numero);
    numero++;
}

let linguagem = "javascript";

for (let letra of linguagem) {
    console.log(letra);
}

function soma(a, b) {
    return a + b;
}
console.log(soma(5, 5));
console.log(soma(3, 4));
console.log(soma(5, 4));

let soma2 = (x, y) => x + y;
console.log(soma2(4, 4));
console.log(soma2(2, 23));