let a = 10;
let b = 20;
let temp; // Variável auxiliar

console.log(`Antes: a = ${a}, b = ${b}`); // Antes: a = 10, b = 20

// Algoritmo de troca
temp = a; // temp recebe valor de a (10)
a = b;    // a recebe valor de b (20)
b = temp; // b recebe valor de temp (10)

console.log(`Depois: a = ${a}, b = ${b}`); // Depois: a = 20, b = 10
