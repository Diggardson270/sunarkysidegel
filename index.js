const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hlink = document.querySelectorAll('#hlink');
const fa = document.querySelector('.fa');

hamburger.addEventListener('click', () => { 
    menu.classList.toggle('hidden');
    fa.classList.toggle('fa-xmark');
})