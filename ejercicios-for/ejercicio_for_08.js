// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.

const texto = "programador";
const contador = {};
for (let i = 0; i < texto.length; i++) {
	const char = texto[i];
	if (contador[char]) {
		contador[char]++;
	} else {
		contador[char] = 1;
	}
}

const caracteres = Object.keys(contador).sort();
console.log("Frecuencia de cada carácter:");
for (let i = 0; i < caracteres.length; i++) {
	const char = caracteres[i];
	console.log(`${char}: ${contador[char]}`);
}


