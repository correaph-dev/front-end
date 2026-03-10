// 1. Lê o valor da conta inserido pelo usuário
let valorConta = prompt("Digite o valor da conta do restaurante:");

// Converte a string inserida para um número decimal (float)
valorConta = parseFloat(valorConta);

// Validação básica para garantir que é um número válido
if (isNaN(valorConta) || valorConta <= 0) {
    alert("Por favor, insira um valor válido para a conta.");
} else {
    // 2. Calcula 10% de gorjeta (taxa de serviço)
    let gorjeta = valorConta * 0.10;

    // 3. Calcula o total a pagar (conta + gorjeta)
    let totalAPagar = valorConta + gorjeta;

    // Exibe os resultados (formatando para 2 casas decimais)
    alert(
        "Valor da Conta: R$ " + valorConta.toFixed(2) + "\n" +
        "Gorjeta (10%): R$ " + gorjeta.toFixed(2) + "\n" +
        "--------------------------\n" +
        "Total a Pagar: R$ " + totalAPagar.toFixed(2)
    );
}
