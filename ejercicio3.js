// 3. Calculadora simple: 
// Declara tres variables: a (un número), operador (un operador aritmético como  cadena), y b (otro número). 
// Utiliza condicionales para realizar la operación  correspondiente y muestra el resultado. 




function calculadora(a, operador, b) {
    switch (operador) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Error: División por cero";
            }
            return a / b;
        case '%':
            return a % b;
        case '**':
            return a ** b;
        default:
            return "Error: Operador no válido";
    }
}

// Ejemplos de uso
console.log(calculadora(10, '+', 5));    // 15
console.log(calculadora(10, '-', 5));    // 5
console.log(calculadora(10, '*', 5));    // 50
console.log(calculadora(10, '/', 5));    // 2
console.log(calculadora(10, '/', 0));    // Error: División por cero
console.log(calculadora(10, '%', 3));    // 1
console.log(calculadora(2, '**', 3));    // 8
console.log(calculadora(10, '&', 5));    // Error: Operador no válido