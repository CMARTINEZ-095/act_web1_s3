// Ejercicio While 7: Contador de Dígitos
// Desarrolla un programa que use while para contar cuántos dígitos tiene un número entero ingresado por el usuario.
console.log("=== Contador de Dígitos ===");

function contarDigitos(numero) {
    numero = Math.abs(numero);

    if (numero === 0) {
        return 1;
    }

    let contador = 0;
    let temp = numero;

    console.log(`Contando dígitos de ${numero}:`);

    while (temp > 0) {
        temp = Math.floor(temp / 10);
        contador++;
        console.log(`Paso ${contador}: temp = ${temp}, dígitos contados = ${contador}`);
    }

    return contador;
}

let numeros = [12345, 158, 55, 8, 0, 2000000];

numeros.forEach(num => {
    let digitos = contarDigitos(num);
    console.log(`El número ${num} tiene ${digitos} dígito(s)\n`);
});