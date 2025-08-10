// Ejercicio While 3: Validador de Contraseña
// Desarrolla un programa que use while para solicitar una contraseña hasta que cumpla con los criterios: 
// mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.
console.log("=== Validador de Contraseña ===");

let password = "";
let intentosFallidos = 0;
const passwordCorrecta = "admin123";

while (password !== passwordCorrecta) {
    
    password = prompt("Ingresa la contraseña:");

    if (password !== passwordCorrecta) {
        intentosFallidos++;
        console.log(`Contraseña incorrecta. Intento fallido #${intentosFallidos}`);
    }
}

console.log(`¡Acceso concedido!`);
console.log(`Intentos fallidos antes del acceso: ${intentosFallidos}`);