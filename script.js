let botonTema = document.getElementById("cambiar-tema");
let botonTemaMovil = document.getElementById("cambiar-tema-m");
let cuerpo = document.getElementById('cuerpo');
let botonesMenu = document.querySelectorAll('.menu');
let botonesCerrar = document.querySelectorAll('.cerrar');
let menuMovil = document.querySelector('.menu-movil');

botonTema.addEventListener('click', () => {
    if(!botonTema.checked) {
        cuerpo.classList.add('oscuro');
    } else {
        cuerpo.classList.remove('oscuro');
    }
});

botonTemaMovil.addEventListener('click', () => {
    if(!botonTemaMovil.checked) {
        cuerpo.classList.add('oscuro');
    } else {
        cuerpo.classList.remove('oscuro');
    }
});

botonesMenu.forEach((item) => {
    item.addEventListener('click', () => {
        menuMovil.style.right = '0px';
    });
});

botonesCerrar.forEach((item) => {
    item.addEventListener('click', () => {
        menuMovil.style.right = '-500px';
    });
});
