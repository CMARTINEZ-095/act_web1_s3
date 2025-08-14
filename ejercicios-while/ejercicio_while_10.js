// Ejercicio While 10: Procesador de Calificaciones
// Usa while para ingresar calificaciones de estudiantes (termina con -1). 
// Calcula el promedio, la nota más alta y más baja.

const readlineSync = require('readline-sync');
let suma = 0;
let cantidad = 0;
let max = null;
let min = null;
let nota = 0;
while (true) {
	nota = parseFloat(readlineSync.question('Ingresa una calificación (-1 para terminar): '));
	if (nota === -1) break;
	suma += nota;
	cantidad++;
	if (max === null || nota > max) max = nota;
	if (min === null || nota < min) min = nota;
}
if (cantidad > 0) {
	console.log(`Promedio: ${(suma / cantidad).toFixed(2)}`);
	console.log(`Nota más alta: ${max}`);
	console.log(`Nota más baja: ${min}`);
} else {
	console.log('No se ingresaron calificaciones.');
}


