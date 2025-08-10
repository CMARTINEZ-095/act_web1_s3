// Ejercicio While 4: Generador de Números Aleatorios
// Usa un ciclo while para generar números aleatorios entre 1 y 100 hasta que salga el número 50. 
// Cuenta cuántos intentos tomó.
console.log("=== Generador de Números Aleatorios ===");

let numeroAleatorio = 0;
let cantidadGenerados = 0;

while (numeroAleatorio <= 95) {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    cantidadGenerados++;
    console.log(`Número ${cantidadGenerados}: ${numeroAleatorio}`);
}

console.log(`\nSe generaron ${cantidadGenerados} números hasta obtener uno mayor a 95`);
console.log(`El número final fue: ${numeroAleatorio}`);