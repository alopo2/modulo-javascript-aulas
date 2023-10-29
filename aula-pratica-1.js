//Exercício sobre o método slice()
let nomeUsuaria = "Angela";
let primeirasLetras = nomeUsuaria.slice(0, 3);

//console.log("As três primeiras letras do nome da usuaria são:", primeirasLetras);

//Exercício sobre o método substring()

let projetoOlabi = "PretaLab";
let tamanhoVariavel = projetoOlabi.length;
let ultimasLetras = projetoOlabi.substring(4,8);

//console.log(tamanhoVariavel);

//console.log("As quatro últimas letras do projeto do Olabi são:", ultimasLetras);

//Exercício sobre o método replace

let nomeUsuaria2 = "angela";
let tamanhoVariavel2 = nomeUsuaria2.length;
//console.log(tamanhoVariavel2)

let ocultandoNomeUsuaria = nomeUsuaria2.replace('angela', '******');
//console.log(ocultandoNomeUsuaria)

//Exercício sobre o método length

let senha = "AWdKq2&";
let comprimentoDeSenha = senha.length;

//console.log("O comprimento total da senha", senha, "é: ", comprimentoDeSenha, "caracteres");


//Exercício sobre o método split()
let frase = "eu alcançarei meus objetivos";
let usandoOMetodoSplit = frase.split('e');

console.log("O resultado da frase", frase, ",recortada usando a letra 'e' como delimitadora", "é: ", usandoOMetodoSplit);

