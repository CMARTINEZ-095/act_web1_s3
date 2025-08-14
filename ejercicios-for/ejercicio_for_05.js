// Ejercicio For 5: Invertir Cadenas de Texto
// Crea un programa que use un ciclo for para invertir una cadena de texto carácter por carácter. 
// Muestra tanto la cadena original como la invertida.

const texto = "Hola Mundo";
let invertida = "";
for (let i = texto.length - 1; i >= 0; i--) {
	invertida += texto[i];
}
console.log("Cadena original:", texto);
console.log("Cadena invertida:", invertida);

