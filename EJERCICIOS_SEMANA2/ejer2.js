/*
Contador de dígitos pares e impares:
Solicita un número entero largo, y con un bucle determina cuántos dígitos son pares y
cuántos impares.
*/

function contadorDigitos(num){
    let pares=0
    let impares=0
    const digitos= num.toString();
    for(let d of digitos){
        if(parseInt(d)%2===0){
            pares++
        }else{
            impares++
        }
    }
    return {pares, impares}
    
}
console.log(contadorDigitos(22222222222222))