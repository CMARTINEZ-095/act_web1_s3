// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.
console.log("=== Contador de Vocales ===");

function contarVocales(frase) {
    let vocales = {
        'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0,
        'á': 0, 'é': 0, 'í': 0, 'ó': 0, 'ú': 0
    };

    let totalVocales = 0;

    console.log(`Analizando la frase: "${frase}"`);
    console.log("Proceso carácter por carácter:");

    for (let i = 0; i < frase.length; i++) {
        let caracter = frase[i].toLowerCase();

        if (vocales.hasOwnProperty(caracter)) {
            vocales[caracter]++;
            totalVocales++;
            console.log(`Posición ${i}: '${frase[i]}' es vocal -> ${caracter}: ${vocales[caracter]}`);
        } else {
            console.log(`Posición ${i}: '${frase[i]}' no es vocal`);
        }
    }

    return {vocales, totalVocales};
}

let frases = [
    "Buenos dias",
    "Visual Studio Code",
    "Comer es delicioso",
    "Hacer ejercicio es divertido",
];

for (let i = 0; i < frases.length; i++) {
    let resultado = contarVocales(frases[i]);

    console.log("\n=== RESULTADOS ===");
    console.log(`Total de vocales: ${resultado.totalVocales}`);
    console.log("Conteo por vocal:");

    for (let vocal in resultado.vocales) {
        if (resultado.vocales[vocal] > 0) {
            console.log(`  ${vocal}: ${resultado.vocales[vocal]}`);
        }
    }
    console.log("---\n");
}