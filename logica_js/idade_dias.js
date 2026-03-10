function converterIdadeParaDias(anos) {
    // Verificação básica para números negativos
    if (anos < 0) {
        return "A idade não pode ser negativa.";
    }

    // Usamos 365.25 para aproximar considerando anos bissextos a cada 4 anos
    const diasPorAno = 365.25;
    const diasVividos = Math.floor(anos * diasPorAno);

    return diasVividos;
}

// --- Exemplos de uso ---
const idade = 61;
const resultado = converterIdadeParaDias(idade);

console.log(`Idade: ${idade} anos`);
console.log(`Quantidade aproximada de dias: ${resultado} dias`);


