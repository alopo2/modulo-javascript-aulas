const pets = [
    {
        nome:'Lua',
        tipo: 'cachorro',
        raca: 'pastor-alemão',
        porte: 'grande',
    },
    {
        nome:'Timmoty',
        tipo: 'gato',
        raca: 'Raça não-definida',
        porte: 'pequeno',
    },
    {
        nome:'Satoshi',
        tipo: 'gato',
        raca: 'tigrado cinza',
        porte: 'grande',
    },
    {
        nome:'Spyke',
        tipo: 'cachorro',
        raca: 'Raça não-definida',
        porte: 'médio',
    },
    {
        nome:'Misandrica',
        tipo: 'gato',
        raca: 'Raça não-definida',
        porte: 'pequeno',
    },
]

const tipoPets = pets.filter(pet => pet.tipo === 'gato' && pet.porte === 'pequeno');

console.log(tipoPets);

