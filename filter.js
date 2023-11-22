//Usando a função filter para retornar os números pares de um array.

const numeros = [1,2,3,4,5,6,7,8,9,10];

const resultado = numeros.filter(numero => numero % 2 === 0);

console.log(resultado);