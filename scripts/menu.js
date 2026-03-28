const toggle = document.getElementById("menu-toggle");
const header = document.querySelector(".header");

toggle.addEventListener("click", () => {
  header.classList.toggle("active");
});


// Seleciona as ondas
const ondas = document.querySelectorAll('.wave');

// Função para mudar a velocidade
function setVelocidade(velocidade) {
  const base = velocidade; // segundos por ciclo

  ondas[0].style.animationDuration = base + 's';
  ondas[1].style.animationDuration = (base * 1.5) + 's'; // mais lenta
  ondas[2].style.animationDuration = (base * 2) + 's';   // mais lenta ainda
}

// Função para mudar a cor
function setCor(cor) {
  document.querySelectorAll('.wave__path').forEach(path => {
    path.setAttribute('fill', cor);
  });
}

// Exemplo de uso:
setVelocidade(4);      // 4 segundos por ciclo
setCor('#00BFFF');     // azul ciano