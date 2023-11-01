//Aula sobre os operadores lógicos em JavaScript; 

//Operador lógico AND(&&)//E;
//Retorna TRUE/Verdadeiro se ambos os operandos forem TRUE/Verdadeiros;

let estaChovendo = false;
let estaEnsolarado = true; 

let resultado = estaChovendo && estaEnsolarado;

//console.log(resultado); //O resultado vai ser False

//Exemplo 2 - Operador lógico AND(&&)//E;

let chove = true;
let estaMolhado = true;

let resultadoDaOperacao = chove && estaMolhado;

//console.log(resultadoDaOperacao); //O resultado vai ser True.

//Operador lógico OR (||) // OU;
//Retorna TRUE se um dos operandos for TRUE.

let estaFrio = true;
let estaCalor = false;

let resultadoDaOperacaoOR = estaFrio || estaCalor;

//console.log(resultadoDaOperacaoOR);

//Operador lógico NOT(!)
//Inverte os valores TRUE para FALSE, ou FALSE para TRUE. 

let estaFrio2 = true;
let resultadoDaOperacaoNOT = !estaFrio2;

console.log(resultadoDaOperacaoNOT);
