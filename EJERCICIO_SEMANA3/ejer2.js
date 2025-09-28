/*

Filtrado y estadística de temperaturas:
Dado un array de temperaturas de un mes, filtra los días con temperaturas mayores al
promedio y muestra estadísticas como el mínimo, máximo y promedio general.

*/
function estadisticasTemperaturas() {
  const temperaturas = [
    22, 19, 25, 30, 18, 24, 27, 29, 21, 23, 26, 28, 20, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  ];

  function analizarTemperatura(temp) {
    const minimo = Math.min(...temp);
    const maximo = Math.max(...temp);

    const suma = temp.reduce((total, tem) => total + tem);
    const tamaño = temp.length;
    const promedio = suma / temp.length;
    console.log(maximo);
    console.log(tamaño);
    console.log(promedio);
    console.log(minimo);
    console.log(suma);

    const diasCalurosos = temp
      .map((tem, index) => ({ dia: index + 1, temperatura: tem }))
      .filter((item) => item.temperatura > promedio);
    console.log(`Días más colurosos mayores al promedio: `);

    diasCalurosos.forEach((element) => {
      console.log(`Día: ${element.dia} temperatura: ${element.temperatura}`);
    });
  }

  analizarTemperatura(temperaturas);
}
estadisticasTemperaturas();
