function calcularPrecio() {
    var precioUnitario = parseFloat(document.getElementById("precio").innerText);
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var total = precioUnitario * cantidad;
    document.getElementById("total").innerText = total.toFixed(2) + " €";
}

// Llamamos a la función para calcular el precio al cargar la página
calcularPrecio();

function calcularPrecioCamiHL() {
    var precioUnitarioCamiHL = parseFloat(document.getElementById("precioCamiHL").innerText);
    var cantidadCamiHL = parseInt(document.getElementById("cantidadCamiHL").value);
    var total = precioUnitarioCamiHL * cantidadCamiHL;
    document.getElementById("totalCamiHL").innerText = total.toFixed(2) + " €"; // Redondeamos el total a 2 decimales
}

// Llamamos a la función para calcular el precio al cargar la página
calcularPrecioCamiHL();

function calcularPrecioCamiHF() {
    var precioUnitarioCamiHL = parseFloat(document.getElementById("precioCamiHF").innerText);
    var cantidadCamiHL = parseInt(document.getElementById("cantidadCamiHF").value);
    var total = precioUnitarioCamiHL * cantidadCamiHL;
    document.getElementById("totalCamiHF").innerText = total.toFixed(2) + " €"; // Redondeamos el total a 2 decimales
}

// Llamamos a la función para calcular el precio al cargar la página
calcularPrecioCamiHF();

function calcularPrecioCamiMF() {
    var precioUnitarioCamiHL = parseFloat(document.getElementById("precioCamiMF").innerText);
    var cantidadCamiHL = parseInt(document.getElementById("cantidadCamiMF").value);
    var total = precioUnitarioCamiHL * cantidadCamiHL;
    document.getElementById("totalCamiMF").innerText = total.toFixed(2) + " €"; // Redondeamos el total a 2 decimales
}

// Llamamos a la función para calcular el precio al cargar la página
calcularPrecioCamiMF();

//--------------------------------------------------------------------------------------
var TodoRopa = document.getElementById('ropa');

var body = document.getElementById('body');
var Bolsa = document.getElementById('Bolsa');;
var TiendaBolsa = document.getElementById('BotonBolsa');

function mostrarBolsa() {
    TodoRopa.style.display = 'none';
    Bolsa.style.display = 'block';
    body.style.display = 'block';
}

TiendaBolsa.onclick = mostrarBolsa;



var CamiHL = document.getElementById('CamisetaHombreLogo');;
var TiendaCamiHL= document.getElementById('BotonCamiHL');

function mostrarCamiHL() {
    TodoRopa.style.display = 'none';
    CamiHL.style.display = 'block';
    body.style.display = 'block';
}

TiendaCamiHL.onclick = mostrarCamiHL;


var CamiHF = document.getElementById('CamisetaHombreFoto');;
var TiendaCamiHF= document.getElementById('BotonCamiHF');

function mostrarCamiHF() {
    TodoRopa.style.display = 'none';
    CamiHF.style.display = 'block';
    body.style.display = 'block';
}

TiendaCamiHF.onclick = mostrarCamiHF;


var CamiMF = document.getElementById('CamisetaMujerFoto');;
var TiendaCamiMF= document.getElementById('BotonCamiMF');

function mostrarCamiMF() {
    TodoRopa.style.display = 'none';
    CamiMF.style.display = 'block';
    body.style.display = 'block';
}

TiendaCamiMF.onclick = mostrarCamiMF;