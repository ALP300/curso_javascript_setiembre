/*

Filtrado y estadística de temperaturas:
Dado un array de temperaturas de un mes, filtra los días
 con temperaturas mayores al
promedio y muestra estadísticas como el 
mínimo, máximo y promedio general.

*/
function temperatura() {
  const temperatura = [34, 34, 324, 23, 42, 432, 4, 234, 23, 32, 43];

  function analizarTemperatura(temp) {
    const minimo = Math.min(...temp);
    const max = Math.max(...temp);
    const suma = temp.reduce((total, tem) => total + tem);
    const promedio = suma / temp.length;
    console.log(`El mínimo es ${minimo}`);
    console.log(`El máximo es ${max}`);
    console.log(`El promedio es ${promedio}`);

    const diasCalurosos = temp.map((tem, index) => ({
      dia: index + 1,
      temperatura: tem,
    })).filter((item)=>item.temperatura>promedio)

    diasCalurosos.forEach(element => {
        console.log(`Día ${element.dia} temperatura ${element.temperatura}`);
    });
  }


  analizarTemperatura(temperatura)
}
temperatura()