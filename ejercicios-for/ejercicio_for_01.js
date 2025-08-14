// Ejercicio For 1: Tabla de Multiplicar Completa
// Usa ciclos for anidados para crear las tablas de multiplicar del 1 al 12. 
// Presenta los resultados en formato de tabla organizada.
console.log("=== Tablas de Multiplicar del 1 al 12 ===\n");
for (let i = 1; i <= 12; i++) {
	console.log(`Tabla del ${i}`);
	for (let j = 1; j <= 10; j++) {
		let resultado = `${i} x ${j} = ${i * j}`;
		console.log(resultado.padEnd(18));
	}
	console.log("-");
}
