// 1. Armazene o ano de nascimento
const anoNascimento = 1990;

// 2. Obtenha o ano corrente (atual) automaticamente
const anoAtual = new Date().getFullYear();

// 3. Calcule a idade subtraindo e armazene em uma variável
const idade = anoAtual - anoNascimento;

// Exibir o resultado
console.log("Ano de Nascimento:", anoNascimento);
console.log("Ano Atual:", anoAtual);
console.log("Idade:", idade);
