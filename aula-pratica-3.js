//Exercícios da aula de sábado 11/11

//1. Crie uma função que receba dois números e retorne o maior deles.

function maiorNumero(num1, num2) {
   if(num1 > num2) {
    return num1
   } else {
    return num2
   }
}

//console.log(maiorNumero(20, 10));
//console.log(maiorNumero(30, 50));


//3. Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo 
//dependendo da função passada como parâmetro.

function maiorOuIgual(num1, num2) {
    return num1 >= num2
}

//console.log(maiorOuIgual(50, 100));

//Outra forma de fazer a mesma operação: 

function maiorOuIgual2(num1, num2) {
    if(num1 >= num2) {
     return num1
    } else {
     return num2
    }
}

//console.log(maiorOuIgual2(50, 100));
//console.log(maiorOuIgual2(100, 100));


//9. Crie uma função que receba um número e imprima no console de 0 até o número informado. 
//Além disso, cada vez que imprimir o número, informe se é par ou ímpar.

function parOuImpar(numero) {
    for(let contador = 0; contador <= numero; contador++){
        if(contador % 2 == 0){
            console.log(`${contador} é PAR`)
        } else {
            console.log(`${contador} é IMPAR`)
        }
    }
    return
}

//console.log(parOuImpar(10))

//10. Crie uma estrutura de repetição usando while ou for, que se repita até que o número informado seja 0.

let numero = 5

for (let contador = 0; contador <= numero; contador++){
    console.log(contador)
}

//Exemplo de como seria o decremento de um número: 

let contador = 20

while(contador >= 0){
    console.log(`Decrementando de 20 a 0: ${contador}`);
    contador--
}