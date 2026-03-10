// 1. Armazenar o valor total e quantidade de pessoas
let valorTotal = 150.00; // Valor da conta
let quantidadePessoas = 3; // Pessoas dividindo

// Função para calcular a conta
function calcularDivisao(total, pessoas) {
    // 2. Validação: Evitar divisão por zero ou números negativos
    if (pessoas <= 0) {
        return "A quantidade de pessoas deve ser maior que zero.";
    }

    // 3. Calcular quanto cada um deve pagar
    let valorPorPessoa = total / pessoas;

    // 4. Retornar o valor formatado com 2 casas decimais
    return `Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`;
}

// Executando o algoritmo
console.log(calcularDivisao(valorTotal, quantidadePessoas));

