const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () =>{
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
})

const menuLinks = document.querySelectorAll('.ham a[href^="#"]');


enlaces.addEventListener('click', () =>{
    enlaces.classList.remove('activado')
    barras.forEach(child => {child.classList.toggle('animado')});
})

