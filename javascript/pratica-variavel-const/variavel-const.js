const nome = 'João';
    nome = 'Maria'; // Erro: Não é possivel reassociar uma constante
const nome = 'Pedro'; // Erro: Não é possivel redeclarar no mesmo escopo
if (true) {
    const idade = 30;
    console.log(idade); //30
} 
console.log(idade); // Erro: idade não esta definida fora do bloco