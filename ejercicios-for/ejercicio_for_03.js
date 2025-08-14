// Ejercicio For 3: Análisis de Array de Números
// Dado un array de 20 números aleatorios, usa un ciclo for para encontrar: 
// el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.

// Generar el array de 20 números aleatorios entre 1 y 100
const numeros = [];
for (let i = 0; i < 20; i++) {
	numeros.push(Math.floor(Math.random() * 100) + 1);
}

let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
	let n = numeros[i];
	if (n > mayor) mayor = n;
	if (n < menor) menor = n;
	suma += n;
	if (n % 2 === 0) {
		pares++;
	} else {
		impares++;
	}
}

let promedio = suma / numeros.length;

console.log("Array generado:", numeros);
console.log("Número mayor:", mayor);
console.log("Número menor:", menor);
console.log("Suma total:", suma);
console.log("Promedio:", promedio.toFixed(2));
console.log("Cantidad de pares:", pares);
console.log("Cantidad de impares:", impares);



