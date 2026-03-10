/**
 * Calcula a quantidade de litros consumidos em uma viagem.
 * @param {number} distancia - A distância percorrida em km.
 * @param {number} consumoMedio - O consumo médio do carro em km/l.
 * @returns {string} - A quantidade de litros formatada.
 */
function calcularLitrosGastos(distancia, consumoMedio) {
    if (consumoMedio <= 0) {
        return "O consumo médio não pode ser zero ou negativo.";
    }

    // Aplicação da fórmula
    const litrosGastos = distancia / consumoMedio;

    // Retorna o valor formatado com 2 casas decimais
    return litrosGastos.toFixed(2) + " litros";
}

// --- Exemplo de uso ---
const distanciaViagem = 450; // km
const consumoCarro = 12; // km/l (faz 12km por litro)

const totalLitros = calcularLitrosGastos(distanciaViagem, consumoCarro);

console.log(`Distância: ${distanciaViagem} km`);
console.log(`Consumo: ${consumoCarro} km/l`);
console.log(`Combustível gasto: ${totalLitros}`); 
// Saída esperada: "37.50 litros"
