// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de un número ingresado por el usuario.

const readlineSync = require('readline-sync');
let n = parseInt(readlineSync.question('Ingresa un número para calcular su factorial: '));
let resultado = 1;
let contador = n;
while (contador > 1) {
	resultado *= contador;
	contador--;
}
console.log(`El factorial de ${n} es: ${resultado}`);


