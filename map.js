//Usando a função map para realizar a multiplicação dos números de um array.

//Defino o meu array númerico
const numeros = [56,62,49,658,74,55226];

//Função arrow function, que irá executar a multiplicação dos números do meu array,
//por 2, quando ela for chamada. 

const multiplica = valor => valor * 2;

//Crio uma constante que guarda a iteração do map. 
//Chamo a função map, e passo numeros que é o meu array. 
//Passo para dentro de map, a função que irá executar a multiplicação

//const resultado = numeros.map(multiplica);

//console.log(resultado)


//Outro exemplo usando a função map:

//Defino um array chamado idades, e passo para ele, valores númericos referentes
//a idades
const idades = [18, 20, 28, 32, 50, 72];

//Defino uma função, que receberá como parâmetro, item a item do meu array,
//quando ela for executada. Retornando uma mensagem, unida desse valor do array.
const geraTexto = idade => `Eu tenho ${idade} anos de idade`;

//Crio uma constante para armazenar o meu resultado. 
//Executo a função map, que irá iterar sobre o meu array de idades. 
//E, dentro da função map, executo a função geraTexto. 
const resultado = idades.map(geraTexto);

console.log(resultado)