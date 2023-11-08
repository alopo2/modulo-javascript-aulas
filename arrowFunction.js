const realizaOperacoes = (numero1, numero2) => {
    const soma = numero1 + numero2
    const subtracao = numero1 - numero2
    const multiplicacao = numero1 * numero2
    const divisao = numero1 / numero2

    return {
        soma: soma,
        subtracao: subtracao,
        divisao: divisao,
        multiplicacao: multiplicacao,
    };
};

const resultado = realizaOperacoes(50, 30);

console.log("Soma: " + resultado.soma);
console.log("Divisao: " + resultado.divisao);
console.log("Subtracao: " + resultado.subtracao); 
console.log("Multiplicacao: " + resultado.multiplicacao);