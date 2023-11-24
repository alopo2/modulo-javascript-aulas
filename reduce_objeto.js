const pessoas = [
    {
        nome: 'Angela',
        idade: 28,
        signo: 'Câncer',
    },
    {
        nome: 'Samy',
        idade: 33,
        signo: 'Touro',
    },
    {
        nome: 'Catarine',
        idade: 38,
        signo: 'Touro',
    },
    {
        nome: 'Vitória',
        idade: 29,
        signo: 'Leão',
    },
    {
        nome: 'Rhawanne', 
        idade: 31,
        signo: 'Áries',
    },
]

const quantidadePessoas = pessoas.length;

const totalIdades = pessoas.reduce((idade, pessoa) => {
    idade += pessoa.idade;
    return idade;
}, 0)

//console.log('A soma das idades de todas as pessoas é: ', totalIdades);
console.log('A média de idade entre as pessoas é: ', totalIdades/quantidadePessoas)