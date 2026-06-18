let pessoa = {
    nome: 'Peter',
    idade: 30,
    cidade: 'Lisboa'
};
console.log(pessoa.nome);
console.log(pessoa['idade']);

pessoa.profissao = 'Engenheiro';
pessoa.idade = 31;

delete pessoa.cidade;

console.log(pessoa);

for (let chave in pessoa) {
    console.log(chave + ': ' + pessoa[chave])
}

