// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.

const lanzamientos = 1000;
const frecuencias = {};
for (let suma = 2; suma <= 12; suma++) {
	frecuencias[suma] = 0;
}

for (let i = 0; i < lanzamientos; i++) {
	const dado1 = Math.floor(Math.random() * 6) + 1;
	const dado2 = Math.floor(Math.random() * 6) + 1;
	const suma = dado1 + dado2;
	frecuencias[suma]++;
}

console.log("Frecuencia de cada suma (2-12):");
for (let suma = 2; suma <= 12; suma++) {
	console.log(`${suma}: ${frecuencias[suma]}`);
}

let maxSuma = 2;
for (let suma = 3; suma <= 12; suma++) {
	if (frecuencias[suma] > frecuencias[maxSuma]) {
		maxSuma = suma;
	}
}
console.log(`La suma más común es: ${maxSuma} con ${frecuencias[maxSuma]} apariciones.`);


