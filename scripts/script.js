/* global document */
const reloj = document.getElementById('principal__contenedor__reloj');
const contenedor = document.getElementById('principal__contenedor');
const contenedor1 = document.getElementById('principal__contenedor1');
const uno = document.getElementById('principal__uno');
const dos = document.getElementById('principal__dos');
const tres = document.getElementById('principal__tres');
const menuh = document.getElementById('principal__menu-hamburguesa');
reloj.value = 'Welcome';

setTimeout(() => {
  reloj.style.color = '#222';
}, 1500);

// localStorage.setItem('');

setInterval(() => {
  const hora = new Date().getHours();
  const minutes = new Date().getMinutes();
  reloj.style.color = '#fff';

  if (minutes <= 9) {
    reloj.value = `${hora}:0${minutes}`;
    if (hora <= 9) {
      reloj.value = `0${hora}:0${minutes}`;
    }
  } else {
    reloj.value = `${hora}:${minutes}`;
  }
}, 2000);

// !R
// *G
// ?B

function x(h) {
  h.addEventListener('input', () => {
    const rgb = `rgb(${Number(uno.value)}, ${Number(dos.value)}, ${Number(tres.value)})`;

    reloj.style.backgroundColor = rgb;
    contenedor.style.backgroundColor = rgb;
  });
}

x(uno);
x(dos);
x(tres);

// ? Menu Hamburguesa

menuh.addEventListener('click', () => {
  contenedor1.style.animationDuration = '3s';
  contenedor1.classList.toggle('active');

  if (menuh.style.transform === 'rotate(180deg)') {
    menuh.style.transform = 'rotate(0deg)';
  } else {
    menuh.style.transform = 'rotate(180deg)';
  }
});
