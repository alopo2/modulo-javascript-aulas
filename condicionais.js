//Dandara tirou nota 6 na prova 1, tirou nota 7 na prova 2, e tirou no trabalho extra nota 5.

//Para Dandara ser aprovada, ela precisa de média 6.

//&& = E
//|| = OU
//== igual
//=== estritamente igual

let notaProva1 = 6;
let notaProva2 = 7;
let trabalhoExtra = 4;

let media = (notaProva1 + notaProva2 + trabalhoExtra) / 3;

/*if (media >= 6) {
    console.log(`Parabéns, você venceu gata. Sua média foi: ${media}`)
} else {
    console.log(`Você foi reprovada. Se esforce na próxima ${media}`)
}*/

if (media >= 6) {
    console.log(`Você foi aprovada com média: ${media}`);
} else if (media < 6 && media > 5) {
    console.log(`Dandara não desista. Faça uma pesquisa e me entregue na próxima aula. Sua média foi: ${media}`)
} else {
    console.log(`Você foi reprovada com média: ${media}`)
}