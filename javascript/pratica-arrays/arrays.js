let numeros = [1, 2, 3, 4, 5];
  console.log(numeros[0]);

console.log(numeros[4]);

numeros[5] = 6;

numeros[0] = 0;

numeros.push(7); // adiciona um elemento no final
numeros.pop(); //Remove o último elemento
numeros.shift(); //Remove o primeiro elemento
numeros.unshift(0); //Adiciona um elemento no inicio

console.log(numeros);