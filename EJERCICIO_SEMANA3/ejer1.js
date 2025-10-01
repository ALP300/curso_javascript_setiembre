/*
Búsqueda avanzada de elementos:
Crea un array de objetos con productos 
(nombre, categoría, precio). Solicita una
categoría y muestra todos los productos de 
esa categoría ordenados por precio.
*/

function busquedadAvanzada() {
  const productos = [
    {
      nombre: "Television",
      categoria: "Tecnología",
      precio: 2000,
    },
    {
      nombre: "Celular",
      categoria: "Tecnología",
      precio: 1000,
    },
    {
      nombre: "Polo",
      categoria: "Ropa",
      precio: 100,
    },
    {
      nombre: "Zapatilla",
      categoria: "Ropa",
      precio: 200,
    },
  ];
  function buscarCategoria(categoria) {
    const productosFiltrados = productos
      .filter(
        (producto) =>
          producto.categoria.toLowerCase() === categoria.toLowerCase()
      )
      .sort((a, b) => a.precio - b.precio);
    if (productosFiltrados.length === 0) {
      console.log(`No se encontraron valores en la categoría ${categoria}`);
      return [];
    }
    console.log("Los valores de esa categoría son: ");
    productosFiltrados.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });
    return productosFiltrados;
  }
  buscarCategoria("Tecnología")
}
busquedadAvanzada()