// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.

const readlineSync = require('readline-sync');
const array = [];
for (let i = 0; i < 15; i++) {
	array.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Array generado:", array);
const buscar = parseInt(readlineSync.question('¿Qué número quieres buscar en el array?: '));
let pos = -1;
let i = 0;
while (i < array.length) {
	if (array[i] === buscar) {
		pos = i;
		break;
	}
	i++;
}
if (pos !== -1) {
	console.log(`El número ${buscar} se encontró en la posición ${pos}`);
} else {
	console.log(`El número ${buscar} no está en el array.`);
}


