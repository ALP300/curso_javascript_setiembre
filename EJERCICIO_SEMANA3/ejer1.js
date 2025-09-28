/*
Búsqueda avanzada de elementos:
Crea un array de objetos con productos (nombre, categoría, precio). Solicita una
categoría y muestra todos los productos de esa categoría ordenados por precio.
*/
function busquedadAvanzada() {
  const productos = [
    {
      nombre: "Iphone 17",
      categoría: "Electrónicos",
      precio: 5000,
    },
    {
      nombre: "Celular",
      categoría: "Electrónicos",
      precio: 1200,
    },
    {
      nombre: "Polo",
      categoría: "Ropa",
      precio: 90,
    },
    {
      nombre: "Zapatillas",
      categoría: "Ropa",
      precio: 200,
    },
    {
      nombre: "ZapatillasA",
      categoría: "Ropa",
      precio: 900,
    },
     {
      nombre: "ZapatillasB",
      categoría: "Ropa",
      precio: 1500,
    },
  ];

  function buscarCategoria(categoría) {
    const productosFiltrados = productos.filter(
      producto => producto.categoría.toLowerCase() === categoría.toLowerCase()).sort((a,b)=> a.precio-b.precio);
    
    if(productosFiltrados.length==0){
        console.log(`No se encontraron productos en la categoría ${categoría}`)
        return []
    }
    console.log(
      `Productos en la categoría ${categoría} : `
    );

    productosFiltrados.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });

    return productosFiltrados;
  }

  buscarCategoria("Ropa")
}
busquedadAvanzada();
