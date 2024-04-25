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

var IconoInsta = document.getElementById('ImagenInsta');
var Insta = document.getElementById('insta');
var IconoCorreo = document.getElementById('ImagenCorreo');
var correo= document.getElementById('correo');
function MostrarInsta(){
    Insta.style.display = 'block';
    correo.style.display = 'none';

}

function OcultarInsta(){
    Insta.style.display = 'none';
    
}
IconoInsta.ondblclick = OcultarInsta;
IconoInsta.onclick = MostrarInsta;


function MostrarCorreo(){
    correo.style.display = 'block';
    Insta.style.display = 'none';
}

function OcultarCorreo(){
    correo.style.display = 'none';
}
IconoCorreo.ondblclick = OcultarCorreo;
IconoCorreo.onclick = MostrarCorreo;
