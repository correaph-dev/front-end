/**
 * Calcula o preço final com desconto.
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} porcentagemDesconto - A porcentagem de desconto (ex: 20 para 20%).
 * @returns {number} O preço final após o desconto.
 */
function calcularPrecoFinal(precoOriginal, porcentagemDesconto) {
    // 1. Calcula o valor do desconto: Preço * (Desconto / 100)
    const valorDesconto = precoOriginal * (porcentagemDesconto / 100);
    
    // 2. Subtrai o desconto do preço original
    const precoFinal = precoOriginal - valorDesconto;
    
    // Retorna o valor formatado (opcional: .toFixed(2) para 2 casas decimais)
    return precoFinal.toFixed(2);
}


// Exemplo de uso:
const precoProduto = 150.00; // R$ 150
const desconto = 20; // 20%

const precoFinal = calcularPrecoFinal(precoProduto, desconto);
console.log(`Preço original: R$ ${precoProduto.toFixed(2)}`);
console.log(`Desconto: ${desconto}%`);
console.log(`Preço final: R$ ${precoFinal}`);
// Saída: Preço final: R$ 120.00
