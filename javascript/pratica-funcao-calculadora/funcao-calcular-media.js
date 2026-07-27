  function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

let notas = [8, 7.5, 9, 6];
let media = calcularMedia(notas);

console.log(media);