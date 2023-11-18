//Aula prática sobre o DOM (Document Object Model) do dia 18-11

//Selecionando elementos: 

//Com o método getElementById, eu consigo selecionar um elemento por meio do seu id.

const element = document.getElementById('blog-title');
//console.log(element)

//Com o método getElementsByClassName, eu consigo selecionar um elemento por meio da sua classe.

const elementByClassName = document.getElementsByClassName('one');
//console.log(elementByClassName);

//Com o método getElementsByTagName, eu consigo selecionar um elemento por meio da sua tag html.

const elementByTagName = document.getElementsByTagName('h1');
//console.log(elementByTagName);

//Com esse método querySelector, eu consigo selecionar elementos pelo id, pela classe ou pela tag

const elementQuerySelector = document.querySelector('.one');
const elementQuerySelector2 = document.querySelector('#blog-title');
const elementQuerySelector3 = document.querySelector('p');

//console.log(elementQuerySelector);
//console.log(elementQuerySelector2);
//console.log(elementQuerySelector3);

//Com o método querySelectorAll, eu consigo pegar vários elementos que tenham aquele mesmo atributo. 
//pegar elementos por meio do id, da classe ou da tag. 

const todasAsDivs = document.querySelectorAll('div');
//console.log(todasAsDivs);

const paragrafos = document.querySelectorAll('p');
//console.log(paragrafos);


//Manipulando os elementos do HTML
//Com o método innerHTML, sobreescrevo o conteúdo textual de um elemento do meu html

let texto = document.querySelector('.titulo');
texto.innerHTML = "Olá, devas maravilhosas";

let tituloExemplo = document.querySelector('.tituloExemplo');
tituloExemplo.innerHTML = "Alterei o texto que estava aqui"