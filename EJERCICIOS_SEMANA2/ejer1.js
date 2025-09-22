/*
🔁Bucles
5. Suma condicional de múltiplos:
Pide un número N y suma solo los múltiplos de 3 o 5 hasta N. Muestra la suma y los
múltiplos encontrados.

*/

function sumaMultiplos(N){
    let suma= 0;
    let multiplos=[]
    for(let i= 1;i<=N; i++){
        if(i%3===0 && i%5===0){
            multiplos.push(i)
            suma+=i
        }
    }
    return {suma, multiplos}
}

console.log(sumaMultiplos(60))
