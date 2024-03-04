let precio = 400000;
let cantidad = 0;

let precioSpan = document.querySelector(".precio-inicial");
let cantidadSpan = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;
totalSpan.innerHTML = 0;

function incrementar() {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = cantidad * precio;
}

function disminuir() {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        totalSpan.innerHTML = cantidad * precio;
    }
}
