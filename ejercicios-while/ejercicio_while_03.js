// Ejercicio While 3: Validador de Contraseña
// Desarrolla un programa que use while para solicitar una contraseña hasta que cumpla con los criterios: 
// mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.

const readlineSync = require('readline-sync');
let intentos = 0;
let password = "";
function validarPassword(pw) {
	return pw.length >= 8 && /[A-Z]/.test(pw) && /[a-z]/.test(pw) && /[0-9]/.test(pw);
}
while (true) {
	password = readlineSync.question('Ingresa una contraseña: ');
	intentos++;
	if (validarPassword(password)) {
		console.log('¡Contraseña válida!');
		break;
	} else {
		console.log('La contraseña debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.');
		console.log(`Intento #${intentos} fallido.`);
	}
}
console.log(`Total de intentos: ${intentos}`);


