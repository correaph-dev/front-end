/**
 * Calcula o tempo estimado de viagem.
 * @param {number} distanciaKm - A distância em quilômetros (km).
 * @param {number} velocidadeMediaKmh - A velocidade média em km/h.
 * @returns {string} - Tempo estimado formatado.
 */
function calcularTempoViagem(distanciaKm, velocidadeMediaKmh) {
    if (velocidadeMediaKmh <= 0) {
        return "A velocidade média deve ser maior que zero.";
    }

    // Calcula o tempo em horas (número decimal)
    const tempoTotalHoras = distanciaKm / velocidadeMediaKmh;

    // Converte para horas e minutos inteiros
    const horas = Math.floor(tempoTotalHoras);
    const minutos = Math.round((tempoTotalHoras - horas) * 60);

    return `${horas} horas e ${minutos} minutos`;
}

// --- Exemplos de Uso ---
const d = 300; // 300 km
const v = 80;  // 80 km/h

const tempo = calcularTempoViagem(d, v);
console.log(`Distância: ${d}km, Velocidade: ${v}km/h`);
console.log(`Tempo estimado: ${tempo}`); 
// Saída: "3 horas e 45 minutos"
