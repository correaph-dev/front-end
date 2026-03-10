// 1. Ler o número inteiro
let entrada = prompt("Digite um número inteiro:");
let numero = parseInt(entrada);

// 2. Calcular e armazenar em variáveis distintas
let antecessor = numero - 1; // Subtrai uma unidade
let sucessor = numero + 1;   // Adiciona uma unidade

// 3. Exibir os resultados
console.log("Número original: " + numero);
console.log("Antecessor: " + antecessor);
console.log("Sucessor: " + sucessor);

// Exemplo alternativo com alerta no navegador
alert(`Número: ${numero}\nAntecessor: ${antecessor}\nSucessor: ${sucessor}`);
