//Usando a função reduce para realizar a soma dos números de um array.

//Crio o array númerico
const numeros = [1,2,3,4];

const soma = numeros.reduce(function (resultado, item){
    return resultado + item;
},0)

console.log(soma);