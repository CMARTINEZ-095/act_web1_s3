// Ejercicio For 2: Patrón de Asteriscos
// Implementa un programa que use for para crear un patrón de asteriscos en forma de pirámide de 10 niveles de altura.      
console.log("=== Patrón de Asteriscos ===");

let altura = 5;

for (let fila = 1; fila <= altura; fila++) {
    let linea = "";
    for (let asterisco = 1; asterisco <= fila; asterisco++) {
        linea += "*";
    }
    console.log(linea);
}

for (let fila = altura - 1; fila >= 1; fila--) {
    let linea = "";
    for (let asterisco = 1; asterisco <= fila; asterisco++) {
        linea += "*";
    }
    console.log(linea);
}