const koke = document.getElementById('koke');
const contador = document.getElementById('contador');

let valorContador = 0;

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

koke.addEventListener('click', contadorKoke);

initContador();
