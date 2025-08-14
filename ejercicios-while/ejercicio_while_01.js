// Ejercicio While 1: Contador de Números
// Crea un programa que use un ciclo while para contar del 1 al 50, 
// pero que solo muestre los números divisibles por 3 y 5.

let num = 1;
while (num <= 50) {
	if (num % 3 === 0 && num % 5 === 0) {
		console.log(num);
	}
	num++;
}


