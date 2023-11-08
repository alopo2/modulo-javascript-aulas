//Usando o loop de repetição FOR para imprimir a multiplicação do número 7;

/*for (let multiplicador = 1; multiplicador <= 10; multiplicador++){
    console.log(7 * multiplicador);
}*/

//Usando o loop de repetição FOR para imprimir a tabuada do número 5;

/*const numero = 5;

for (let contador = 1; contador <= 10; contador++){
    const resultado = numero * contador; 
    console.log(`${numero} x ${contador} = ${resultado}`);
}*/



//Exemplo usando a estrutura de repetição enquanto(while), para imprimir a tabuada do número 5: 

/*let numero = 5;
let contador = 1; 

while (contador <= 10) {
    const resultado = numero * contador;
    console.log(`${numero} x ${contador} = ${resultado}`)
    contador++
}*/


//Usando o WHILE para imprimir os números pares de 1 a 100:

let contador = 2;
//Iniciando o contador em 2

while (contador <= 100) {
    //Laço de repetição que vai imprimir no console, os números pares de 1 a 100
    console.log(`Os números pares de 1 a 100 são: ${contador}`)

    //Incrementar de 2 em 2, enquanto a minha condição for verdadeira. 
    contador = contador + 2
}