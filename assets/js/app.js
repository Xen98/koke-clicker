const koke = document.getElementById('koke');
const contador = document.getElementById('contador');
const btnSkin = document.getElementById('cambiarSkin');
const listaSkins = document.getElementById('listaSkins');
const skins = document.getElementById('skins');
const titulo = document.getElementById('titulo');

let valorContador = 0;
const audS4C = new Audio('assets/sounds/suaj4clicker.wav');

const refSkins = {
  skinKoke: 'assets/img/koke.png',
  skinJargua: 'assets/img/jargua.png',
  skinGomers: 'assets/img/gomers.png',
  skinChen: 'assets/img/chen.png'
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
  valorContador++;
  setContador(valorContador);
}

const mostrarSkins = () => {
 listaSkins.classList.toggle('oculto'); 
}

const seleccionarSkin = (e) => {
  skinId = e.target.id;
  if (skinId != 'skins') {
    koke.setAttribute('src', refSkins[skinId]);
  }
}

koke.addEventListener('click', contadorKoke);

btnSkin.addEventListener('click', mostrarSkins);

skins.addEventListener('click', seleccionarSkin);

titulo.addEventListener('click', () => audS4C.play())

initContador();

audS4C.play();
