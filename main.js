// Array de los productos a mostrar
let productos = [];
// Dando valor a los botones
let botonDeAgregar = document.querySelector(".botum");
let carrito = document.querySelector("#Mostrar-Carrito");
// Agregando eventos a los botones
botonDeAgregar.addEventListener("click", productosCarrito);
carrito.addEventListener("click", ecomerse);

// Funciones 
function productosCarrito() {
    let nombre = {
        producto: "pasto",
        precio: 2.000,
    };  
    productos.push(nombre);
    localStorage.setItem("productos", JSON.stringify(productos)); // Almacenar el array completo
}

function ecomerse() {
    console.log(productos);
    // Si deseas almacenar el array de productos en el localStorage nuevamente
    localStorage.setItem("productos", JSON.stringify(productos));
}