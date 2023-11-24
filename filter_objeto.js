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

//console.log(pessoas);

const novaLista = pessoas.filter(pessoa => pessoa.signo === 'Peixes');

//console.log('A nova lista de pessoas é: ', novaLista);

const pessoasMaisNovas = pessoas.filter(function (pessoa) {
    return pessoa.idade < 30;
});

//console.log(pessoasMaisNovas);

const pessoasMaisVelhas = pessoas.filter(pessoa => pessoa.idade > 30);

console.log(pessoasMaisVelhas);