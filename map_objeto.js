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

console.log(pessoas);

const nomeCurso = pessoas.map(pessoa => {
    pessoa.turma = '01';
    pessoa.curso = 'Aprendendo JavaScript';
    return pessoa;
});

console.log('Pessoas do curso: ', nomeCurso);