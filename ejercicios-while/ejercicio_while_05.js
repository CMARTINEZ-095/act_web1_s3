// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de un número ingresado por el usuario.
console.log("=== Calculadora de Factorial ===");

function calcularFactorialWhile(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos";
    }

    let factorial = 1;
    let i = 1;

    console.log(`Calculando el factorial de ${n}:`);
    console.log(`Paso inicial: factorial = 1`);

    while (i <= n) {
        factorial *= i;
        console.log(`Paso ${i}: factorial = factorial * ${i} = ${factorial}`);
        i++;
    }

    return factorial;
}

let numero = 5;
let resultado = calcularFactorialWhile(numero);
console.log(`\nEl factorial de ${numero} es: ${resultado}`);