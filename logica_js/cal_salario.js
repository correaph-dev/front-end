// 1. Armazenar os dados (entrada)
let valorHora = 50.00; // Exemplo: R$ 50,00 por hora
let horasTrabalhadas = 160; // Exemplo: 160 horas no mês

// 2. Calcular o salário (processamento)
let salarioMensal = valorHora * horasTrabalhadas;

// 3. Exibir o resultado (saída)
console.log("Valor da hora: R$ " + valorHora.toFixed(2));
console.log("Horas trabalhadas: " + horasTrabalhadas + "h");
console.log("Salário Total: R$ " + salarioMensal.toFixed(2));
