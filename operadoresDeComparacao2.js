//Aula sobre os operadores de comparação (01/11);

//Operador de igualdade (==);
//Retorna TRUE se os operandos forem iguais
//Retorna FALSE se os operandos forem diferentes

let numeroIgual = 10;
let numeroIgual2 = 10;

let resultado1 = numeroIgual == numeroIgual2;

//console.log("O resultado da comparação entre os números é: ", resultado1);

//Operador de desigualdade/diferença (!=)
//Retorna TRUE se os operandos forem diferentes
//Retorna FALSE se os operandos forem iguais

let numeroDiferente = 10;
let numeroDiferente2 = 20;

let resultadoDiferente = numeroDiferente != numeroDiferente2;

//console.log("O resultado da comparação de diferença entre os números é: ", resultadoDiferente);

//Operador de estrita igualdade/estritamente igual (===);
//Retorna TRUE se os operandos forem iguais e do mesmo tipo;
//Retorna FALSE se os operandos forem diferentes.

let numeroDifValorETipo = 10;
let numeroDifValorETipo2 = "10";

let eDiferenteOValorEOTipo = numeroDifValorETipo === numeroDifValorETipo2;

//console.log("Os valores são diferentes em valor e tipo? ", eDiferenteOValorEOTipo);


//Operador maior que (>);
//Retorna TRUE se o operando da esquerda for maior que o da direita; 

let numeroMaiorQue = 10;
let numeroMaiorQue2 = 20;

let ehMaiorQue = numeroMaiorQue2 > numeroMaiorQue;

//console.log(ehMaiorQue);

//Operador menor que (<); 
//Retornar TRUE se o operando da esquerda for menor que o da direita;

let numeroMenorQue = 20; 
let numeroMenorQue2 = 10;

let ehMenorQue = numeroMenorQue2 < numeroMenorQue;

//console.log(ehMenorQue);

//Operador menor ou igual que (<=); 
//Retorna TRUE se o operando da esquerda for menor ou igual ao da direita. 

let numeroMenorOuIgual = 5; 
let numeroMenorOuIgual2 = 10;

let ehMenorOuIgual = numeroMenorOuIgual <= numeroMenorOuIgual2;

//console.log(ehMenorOuIgual);

//Operador maior ou igual que (>=);
//Retornar TRUE se o operando da esquerda for maior ou igual ao da direita; 

let numeroMaiorOuIgual = 250;
let numeroMaiorOuIgual2 = 50;

let ehMaiorOuIgual = numeroMaiorOuIgual >= numeroMaiorOuIgual2;

console.log(ehMaiorOuIgual);