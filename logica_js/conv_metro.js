function converterMetros(metros) {
    // Validação para garantir que a entrada é um número
    if (isNaN(metros) || metros < 0) {
        return "Por favor, insira um valor numérico válido e positivo.";
    }

    // Cálculos de conversão
    const centimetros = metros * 100;
    const milimetros = metros * 1000;

    // Retorno estruturado
    return {
        metros: metros,
        centimetros: centimetros,
        milimetros: milimetros
    };
}

// --- Exemplo de uso ---
const valorEmMetros = 2.5; // Exemplo: 2.5 metros
const resultado = converterMetros(valorEmMetros);

console.log(`${resultado.metros} metros equivale a:`);
console.log(`- ${resultado.centimetros} centímetros`);
console.log(`- ${resultado.milimetros} milímetros`);
