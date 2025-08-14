// Ejercicio While 7: Contador de Dígitos
// Desarrolla un programa que use while para contar cuántos dígitos tiene un número entero ingresado por el usuario.

const readlineSync = require('readline-sync');
let n = Math.abs(parseInt(readlineSync.question('Ingresa un número entero: ')));
let digitos = 0;
if (n === 0) {
	digitos = 1;
} else {
	while (n > 0) {
		n = Math.floor(n / 10);
		digitos++;
	}
}
console.log(`El número tiene ${digitos} dígito(s).`);


