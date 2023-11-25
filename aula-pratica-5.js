//Aula prática sobre reduce, map e filter. 

const nome = ['B','R','U','N','A'];

//console.log(nome)

const reduce = nome.reduce(function(acumulado, atual){
    return acumulado + atual
});

//console.log(reduce);


const galinhas = [
    {
        nome: 'Ginger',
        idade: 8,
        ovos: 28,
    },
    {
        nome: 'Sra. Tweedy',
        idade: 9,
        ovos: 30
    },
    {
        nome: 'Rocky',
        idade: 10,
        ovos: 0,
    },
    {
        nome: 'Bunty',
        idade: 12,
        ovos: 50
    },
]

const filtrandoGalinhas = galinhas.filter(galinha => galinha.nome === 'Sra. Tweedy');

//console.log(filtrandoGalinhas)

const quantidadeOvos = galinhas.filter(galinha => galinha.ovos > 10);

console.log(quantidadeOvos);