// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.
console.log("=== Validador de Palíndromo ===");

function esPalindromo(texto) {
    let textoLimpio = "";

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i].toLowerCase();
        if (caracter !== ' ') {
            textoLimpio += caracter;
        }
    }

    console.log(`Texto original: "${texto}"`);
    console.log(`Texto limpio: "${textoLimpio}"`);

    let longitud = textoLimpio.length;
    let esPalindromoFlag = true;

    console.log("Verificando carácter por carácter:");

    for (let i = 0; i < Math.floor(longitud / 2); i++) {
        let caracterIzquierda = textoLimpio[i];
        let caracterDerecha = textoLimpio[longitud - 1 - i];

        console.log(`Posición ${i} vs ${longitud - 1 - i}: '${caracterIzquierda}' vs '${caracterDerecha}'`);

        if (caracterIzquierda !== caracterDerecha) {
            esPalindromoFlag = false;
            console.log("  -> No coinciden, no es palíndromo");
            break;
        } else {
            console.log("  -> Coinciden ✓");
        }
    }

    return esPalindromoFlag;
}

let palabras = [
    "honor",
    "vida",
    "yo almuerzo arroz con pollo",
    "hola",
    "piscina",
    "subir las escalares",
    "julian va al gym",
];

for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let resultado = esPalindromo(palabra);

    console.log(`\nResultado: "${palabra}" ${resultado ? "SÍ" : "NO"} es un palíndromo\n`);
    console.log("---");
}