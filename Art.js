document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slider-box li");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3500); // Cambia cada 3 segundos
});

var TodoFot = document.getElementById('imag');

var OnadaElemento = document.getElementById('Onada');
var BotonOnada = document.getElementById('BotonOnada');

function mostrarOnada() {
    TodoFot.style.display = 'none';
    OnadaElemento.style.display = 'block';
}

BotonOnada.onclick = mostrarOnada;



var MediterraniElemento = document.getElementById('Mediterrani');
var BotonMediterrani = document.getElementById('BotonMediterrani');

function mostrarMediterrani() {
    TodoFot.style.display = 'none';
    MediterraniElemento.style.display = 'block';
}

BotonMediterrani.onclick = mostrarMediterrani;

var CaliuElemento = document.getElementById('Caliu');
var BotonCaliu = document.getElementById('BotonCaliu');

function mostrarCaliu() {
    TodoFot.style.display = 'none';
    CaliuElemento.style.display = 'block';
}

BotonCaliu.onclick = mostrarCaliu;


var EmbatElemento = document.getElementById('Embat');
var BotonEmbat = document.getElementById('BotonEmbat');

function mostrarEmbat() {
    TodoFot.style.display = 'none';
    EmbatElemento.style.display = 'block';
}

BotonEmbat.onclick = mostrarEmbat;

var TramuntanaElemento = document.getElementById('Tramuntana');
var BotonTramuntana = document.getElementById('BotonTramuntana');

function mostrarTramuntana() {
    TodoFot.style.display = 'none';
    TramuntanaElemento.style.display = 'block';
}

BotonTramuntana.onclick = mostrarTramuntana;

var CapRoigElemento = document.getElementById('CapRoig');
var BotonCapRoig = document.getElementById('BotonCapRoig');

function mostrarCapRoig() {
    TodoFot.style.display = 'none';
    CapRoigElemento.style.display = 'block';
}

BotonCapRoig.onclick = mostrarCapRoig;