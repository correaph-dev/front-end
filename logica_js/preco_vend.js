/**
 * Calcula o preço de venda baseado no custo e margem de lucro.
 * Fórmula: Preço Venda = Custo / (1 - (Margem% / 100))
 * 
 * @param {number} custo - O custo total do produto.
 * @param {number} margemPorcentagem - A margem de lucro desejada em %.
 * @returns {number} O preço de venda final.
 */
function calcularPrecoVenda(custo, margemPorcentagem) {
    if (margemPorcentagem >= 100) {
        throw new Error("A margem de lucro não pode ser 100% ou mais.");
    }
    
    // Converte a margem para decimal e calcula
    const margemDecimal = margemPorcentagem / 100;
    const precoVenda = custo / (1 - margemDecimal);
    
    // Retorna o valor com 2 casas decimais (formato moeda)
    return parseFloat(precoVenda.toFixed(2));
}

// --- Exemplo de Uso ---
const custoProduto = 50.00; // R$ 50,00
const margemDesejada = 30;   // 30%

const precoFinal = calcularPrecoVenda(custoProduto, margemDesejada);

console.log(`Custo: R$ ${custoProduto.toFixed(2)}`);
console.log(`Margem desejada: ${margemDesejada}%`);
console.log(`Preço de Venda: R$ ${precoFinal.toFixed(2)}`);
// Resultado esperado: 50 / (1 - 0.3) = 50 / 0.7 = 71.43
