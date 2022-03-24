const koke = document.getElementById('koke');
const contador = document.getElementById('contador');
const btnSkin = document.getElementById('cambiarSkin');
const listaSkins = document.getElementById('listaSkins');
const skins = document.getElementById('skins');
const titulo = document.getElementById('titulo');
const colorMode = document.getElementById('color-button');
const iconColor = document.getElementById('icon-color');
const body = document.body;

const dark = true;

let valorContador = 0;
const audS4C = new Audio('assets/sounds/suaj4clicker.wav');
const audPop = new Audio('assets/sounds/pop.mp3');

audPop.volume = 0.3;
audS4C.volume = 0.6;

const refSkins = {
  skinKoke: 'assets/img/koke.png',
  skinJargua: 'assets/img/jargua.png',
  skinGomers: 'assets/img/gomers.png',
  skinChen: 'assets/img/chen.png'
}

const cambiarTema = () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  iconColor.classList.toggle('fa-moon');
  iconColor.classList.toggle('fa-sun');
}

const initContador = () => {
  if (localStorage) {
    valorContador = localStorage.getItem('Contador') || 0;
    setContador(valorContador);
  }
}

const setContador = (valor) => {
  contador.innerText = valor; 
  localStorage.setItem('Contador', valor);
}

const contadorKoke = () => {
  audPop.pause();
  audPop.currentTime = 0;
  audPop.play();
  valorContador++;
  setContador(valorContador);
}

const mostrarSkins = () => {
 listaSkins.classList.toggle('oculto'); 
}

const seleccionarSkin = (e) => {
  skinId = e.target.id;
  if (skinId != 'skins' && skinId) {
    koke.setAttribute('src', refSkins[skinId]);
  }
}

colorMode.addEventListener('click', cambiarTema);

koke.addEventListener('click', contadorKoke);

btnSkin.addEventListener('click', mostrarSkins);

skins.addEventListener('click', seleccionarSkin);

titulo.addEventListener('click', () => audS4C.play())


titulo.addEventListener('touchstart', () => {
  titulo.classList.add('color-primary');
});

titulo.addEventListener('touchend', () => {
  titulo.classList.remove('color-primary');
});

btnSkin.addEventListener('touchstart', () => {
  btnSkin.classList.add('color-primary');
});

btnSkin.addEventListener('touchend', () => {
  btnSkin.classList.remove('color-primary');
});

initContador();

audS4C.play();
