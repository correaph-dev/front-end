// 1. Armazenar a taxa de câmbio em uma constante (1 USD = X BRL)
const TAXA_CAMBIO_USD = 5.05; // Exemplo: 1 Dólar = 5.05 Reais

/**
 * Função para converter Real para Dólar
 * @param {number} valorReal - O valor em Reais
 * @returns {string} - O valor convertido formatado
 */
function converterRealParaDolar(valorReal) {
    if (valorReal < 0) {
        return "Valor inválido";
    }
    
    // Cálculo: Real / Taxa = Dólar
    const valorDolar = valorReal / TAXA_CAMBIO_USD;
    
    // Formatar para 2 casas decimais (USD)
    return valorDolar.toFixed(2);
}

// --- Exemplo de uso ---
const valorEmReais = 100;
const resultado = converterRealParaDolar(valorEmReais);

console.log(`Valor original: R$ ${valorEmReais.toFixed(2)}`);
console.log(`Taxa de câmbio: ${TAXA_CAMBIO_USD}`);
console.log(`Valor convertido: $ ${resultado}`);

// Exemplo de saída formatada como moeda
console.log("----------------");
console.log(`Resultado formatado: $${resultado}`);
