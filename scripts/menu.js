const toggle = document.getElementById("menu-toggle");
const header = document.querySelector(".header");

toggle.addEventListener("click", () => {
  header.classList.toggle("active");
});

// Seleciona as ondas
const ondas = document.querySelectorAll('.wave');

// Controla a velocidade das ondas
function setVelocidade(velocidade) {
  ondas.forEach((onda, i) => {
  const duracao = velocidade * (1 + i * 1); // Aumenta a duração para cada onda
  onda.style.animationDuration = duracao + 's';
  onda.style.animationiterationCount = 'infinite'; // loop infinito
  onda.style.animationTimingFunction = 'linear'; // velocidade constante
  onda.style.animationDirection = i == 2 
  ? 'reverse' // wave--2 vai na direção oposta (cria profundidade)
  : 'alternate'; // demais vão da direita para a esquerda
});
}

// Controla a cor das ondas via CSS variable
function setCor(cor) {
  document.documentElement.style.setProperty('--wave-color', cor);
}

setVelocidade(4);

setCor('#00BFFF');

