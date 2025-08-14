// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego donde el usuario debe adivinar un número entre 1 y 100. 
// Usa while para dar pistas (mayor/menor) y limita a 7 intentos.

const readlineSync = require('readline-sync');
const secreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivina = 0;
let exito = false;
while (intentos < 7) {
	adivina = parseInt(readlineSync.question(`Intento ${intentos + 1}/7 - Adivina el número (1-100): `));
	intentos++;
	if (adivina === secreto) {
		exito = true;
		break;
	} else if (adivina < secreto) {
		console.log('El número es mayor.');
	} else {
		console.log('El número es menor.');
	}
}
if (exito) {
	console.log(`¡Correcto! El número era ${secreto}. Lo lograste en ${intentos} intento(s).`);
} else {
	console.log(`¡Agotaste los 7 intentos! El número era ${secreto}.`);
}


