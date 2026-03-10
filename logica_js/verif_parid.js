function verificarPar(numero) {
    // Armazena o resto da divisão do número por 2
    let resto = numero % 2;

    // Se o resto for 0, o número é par
    if (resto === 0) {
        return `O número ${numero} é par.`;
    } else {
        return `O número ${numero} é ímpar.`;
    }
}

// Exemplos de uso
console.log(verificarPar(10)); // Saída: O número 10 é par.
console.log(verificarPar(7));  // Saída: O número 7 é ímpar.
