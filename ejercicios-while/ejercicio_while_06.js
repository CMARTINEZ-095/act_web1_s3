// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.
console.log("=== Búsqueda en Array ===");

let nombres = ["Ana", "Carlos", "María", "Pedro", "Lucía", "Diego", "Carmen"];
let nombreBuscado = "María";
let indice = 0;
let encontrado = false;
let posicionEncontrada = -1;

console.log(`Buscando "${nombreBuscado}" en el array:`);
console.log(`Array: [${nombres.join(", ")}]`);

while (indice < nombres.length && !encontrado) {
    console.log(`Verificando posición ${indice}: "${nombres[indice]}"`);

    if (nombres[indice] === nombreBuscado) {
        encontrado = true;
        posicionEncontrada = indice;
        console.log(`¡Encontrado! "${nombreBuscado}" está en la posición ${indice}`);
    } else {
        console.log(`"${nombres[indice]}" no es el nombre que buscamos`);
    }

    indice++;
}

if (!encontrado) {
    console.log(`El nombre "${nombreBuscado}" no se encontró en el array`);
}