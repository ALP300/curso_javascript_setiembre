// 3. Calculadora simple:
// Declara tres variables: a (un número), operador (un operador aritmético como  cadena), y b (otro número).
// Utiliza condicionales para realizar la operación  correspondiente y muestra el resultado.

let operador = "*";
let a = 10;
let b = 20;
let resultado;
switch (operador) {
  case "+":
    resultado = a + b;
    break;
  case "-":
    resultado = a - b;
    break;
  case "*":
    resultado = a * b;
    break;
  case "/":
    if (b === 0) {
      resultado = "Error: División por cero";
    } else {
      resultado = a / b;
      break;
    }

  case "%":
    resultado = a % b;
    break;
  case "**":
    resultado = a ** b;
    break;
  default:
    resultado = "Error: Operador no válido";
}

// Ejemplos de uso
console.log(resultado); // 15
