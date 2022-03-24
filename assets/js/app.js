const koke = document.getElementById('koke');
const contador = document.getElementById('contador');
const btnSkin = document.getElementById('cambiarSkin');
const listaSkins = document.getElementById('listaSkins');
const skins = document.getElementById('skins');

let valorContador = 0;

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
  skinId = e.originalTarget.id;
  console.log(e);
  if (skinId != 'skins') {
    koke.setAttribute('src', refSkins[skinId]);
  }
}

koke.addEventListener('click', contadorKoke);

btnSkin.addEventListener('click', mostrarSkins);

skins.addEventListener('click', seleccionarSkin);

initContador();
