function calcularPrecio() {
    var precioUnitario = parseFloat(document.getElementById("precio").innerText);
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var total = precioUnitario * cantidad;
    document.getElementById("total").innerText = total;
}

// Llamamos a la función para calcular el precio al cargar la página
calcularPrecio();

var TodoRopa = document.getElementById('ropa');

var Bolsa = document.getElementById('Bolsa');
var body = document.getElementById('body');
var TiendaBolsa = document.getElementById('comprar');

function mostrarBolsa() {
    TodoRopa.style.display = 'none';
    Bolsa.style.display = 'block';
    body.style.display = 'block';
}

TiendaBolsa.onclick = mostrarBolsa;