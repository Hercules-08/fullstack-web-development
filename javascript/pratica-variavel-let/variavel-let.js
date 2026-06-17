let nome = 'João';
    nome = 'Maria'; // Permite reassociação
let nome = 'Pedro'; // Erro: Não é possivel redeclarar no mesmo escopo
if (true) {
    let idade = 30;
    console.log(idade); //30
}
console.log(idade); // Erro: idade não esta definida fora do bloco