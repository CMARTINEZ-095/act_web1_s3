// Ejercicio For 7: Matriz de Suma
// Usa ciclos for anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). 
// Muestra la matriz formateada.

const matriz = [];
for (let fila = 0; fila < 5; fila++) {
	let filaArr = [];
	for (let col = 0; col < 5; col++) {
		filaArr.push(fila + col);
	}
	matriz.push(filaArr);
}

console.log("Matriz 5x5 (suma de índices):");
for (let i = 0; i < matriz.length; i++) {
	let filaFormateada = matriz[i].map(n => String(n).padStart(2, ' ')).join(' ');
	console.log(filaFormateada);
}
