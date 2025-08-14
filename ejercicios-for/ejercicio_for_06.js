// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). 
// Debe mostrar el proceso paso a paso.

function potencia(base, exponente) {
	let resultado = 1;
	let proceso = `${base}^${exponente} = `;
	for (let i = 1; i <= exponente; i++) {
		resultado *= base;
		proceso += (i === 1 ? base : ` x ${base}`);
	}
	console.log(proceso + ` = ${resultado}`);
	return resultado;
}

// Ejemplo de uso
potencia(3, 4); // 3^4 = 3 x 3 x 3 x 3 = 81
