const pets = [
    {
        nome:'Lua',
        tipo: 'cachorro',
        idade: 12,
        raca: 'pastor-alemão',
        porte: 'grande',
    },
    {
        nome:'Timmoty',
        tipo: 'gato',
        idade: 10,
        raca: 'Raça não-definida',
        porte: 'pequeno',
    },
    {
        nome:'Satoshi',
        tipo: 'gato',
        idade: 30,
        raca: 'tigrado cinza',
        porte: 'grande',
    },
    {
        nome:'Spyke',
        tipo: 'cachorro',
        idade: 50,
        raca: 'Raça não-definida',
        porte: 'médio',
    },
    {
        nome:'Misandrica',
        tipo: 'gato',
        idade: 8,
        raca: 'Raça não-definida',
        porte: 'pequeno',
    },
]

const somaIdadesPets = pets.reduce(function (acumulador, pet) {
    
    return acumulador + pet.idade;

}, 0)

console.log('A soma de todas as idades dos pets é: ', somaIdadesPets);