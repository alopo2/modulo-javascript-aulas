/*Obter o elemento pelo ID. 

let meuParagrafo = document.getElementById("meuParagrafo");

//Alterar o valor de dentro do meu elemento meuParagrafo

meuParagrafo.innerHTML = "Texto alterado com JavaScript"*/


//Função será executada quando clicarmos no botão

function alterarTexto(){
    //Obtem o elemento paragrafo com o id meuParagrafo
    let meuParagrafo = document.getElementById("meuParagrafo");
    //Pedir ao usuário que digite um novo texto
    let novoTexto = prompt("Digite um novo texto: ");
    //Criar uma condicional que verifica se o valor digitado é diferente de nulo//null
    if (novoTexto != null) {
        //Alterar o valor de meuParagrafo para o valor que o usuário digitou.
        meuParagrafo.innerHTML = novoTexto
    }
}