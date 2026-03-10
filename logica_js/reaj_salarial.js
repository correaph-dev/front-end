// 1. Definição do salário atual
let salarioAtual = 2000.00;
const percentualAumento = 0.15; // 15%

// 2. Cálculo do aumento
let valorAumento = salarioAtual * percentualAumento;

// 3. Aplicação do aumento
let novoSalario = salarioAtual + valorAumento;

// Exibição dos resultados
console.log("Salário Antigo: R$ " + salarioAtual.toFixed(2));
console.log("Valor do Aumento: R$ " + valorAumento.toFixed(2));
console.log("Novo Salário: R$ " + novoSalario.toFixed(2));
