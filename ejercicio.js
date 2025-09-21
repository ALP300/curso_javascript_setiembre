// 1. Determina el mayor de tres números: 
// Declara tres variables a, b y c con valores numéricos y utiliza condicionales  para determinar cuál de ellos es el mayor. 



// 2. Determina el rango de un número: Declara una variable num con un valor numérico y utiliza condicionales para determinar en qué rango se encuentra:
// 0 a 10
// 11 a 50
// 51 a 100
// Fuera de esos rangos.

// Declaración de variables
let a = 15;
let operador = "*";
let b = 7;

console.log("\n--- MÉTODO 2: Switch ---");
let resultado2;

switch (operador) {
    case "+":
        resultado2 = a + b;
        console.log(`Resultado: ${a} + ${b} = ${resultado2}`);
        break;
    case "-":
        resultado2 = a - b;
        console.log(`Resultado: ${a} - ${b} = ${resultado2}`);
        break;
    case "*":
        resultado2 = a * b;
        console.log(`Resultado: ${a} * ${b} = ${resultado2}`);
        break;
    case "/":
        if (b !== 0) {
            resultado2 = a / b;
            console.log(`Resultado: ${a} / ${b} = ${resultado2}`);
        } else {
            console.log("Error: División por cero no permitida");
        }
        break;
    case "%":
        if (b !== 0) {
            resultado2 = a % b;
            console.log(`Resultado: ${a} % ${b} = ${resultado2}`);
        } else {
            console.log("Error: Módulo por cero no permitido");
        }
        break;
    case "**":
        resultado2 = a ** b;
        console.log(`Resultado: ${a} ** ${b} = ${resultado2}`);
        break;
    default:
        console.log(`Error: Operador '${operador}' no válido`);
}