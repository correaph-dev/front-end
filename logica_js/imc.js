// 1. Armazenar o peso e a altura (inputs)
let peso = 70.5;    // em kg
let altura = 1.75;  // em metros

// 2. Calcular o IMC e armazenar na variável
let imc = peso / (altura * altura);

// 3. Exibir o resultado
console.log("Peso:", peso, "kg");
console.log("Altura:", altura, "m");
console.log("IMC:", imc.toFixed(2)); // .toFixed(2) limita a 2 casas decimais
