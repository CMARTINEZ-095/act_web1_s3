// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.
console.log("=== Secuencia Matemática (Potencias de 2) ===");

let secuencia = [];
let suma = 0;

console.log("Generando la secuencia: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024");
console.log("(Cada término es 2 elevado a la potencia correspondiente)");

for (let i = 1; i <= 10; i++) {
    let termino = Math.pow(2, i); 
    secuencia.push(termino);
    suma += termino;

    console.log(`Término ${i}: 2^${i} = ${termino} (Suma acumulada: ${suma})`);
}

console.log(`\nSecuencia completa: [${secuencia.join(", ")}]`);
console.log(`Suma total de la secuencia: ${suma}`);

console.log("\nVerificación calculando potencias manualmente:");
let verificacion = 2;
for (let i = 1; i <= 10; i++) {
    console.log(`2^${i} = ${verificacion}`);
    if (i < 10) verificacion *= 2; 
}