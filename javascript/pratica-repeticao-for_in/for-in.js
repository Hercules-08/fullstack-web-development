let pessoa = {
    nome: "Peter",
    idade: 30,
    cidade: "Braga"
};
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}