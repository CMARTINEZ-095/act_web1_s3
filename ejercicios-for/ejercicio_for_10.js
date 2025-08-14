// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.

const texto = "Anita lava la tina";
const limpio = texto
	.toLowerCase()
	.replace(/[^a-z0-9]/g, "");
let esPalindromo = true;
for (let i = 0; i < limpio.length / 2; i++) {
		if (limpio[i] !== limpio[limpio.length - 1 - i]) {
				esPalindromo = false;
				break;
		}
}
console.log(`Texto original: ${texto}`);
console.log(`¿Es palíndromo?: ${esPalindromo ? "Sí" : "No"}`);


