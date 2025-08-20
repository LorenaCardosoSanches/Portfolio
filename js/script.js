const STAR_COUNT = 150; // Quantidade de estrelas
const TYPE_SPEED_MS = 100; // Velocidade do efeito typewriter (ms)

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

// Função para ajustar o tamanho do canvas ao tamanho da tela
function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;

  // Define o tamanho "visual" (CSS)
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  // Define o tamanho real em pixels (melhora nitidez em retina)
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);

  // Ajusta a transformação para continuar desenhando em "unidades CSS"
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

// Sempre que a janela mudar de tamanho, redimensiona o canvas
let resizeId;
window.addEventListener("resize", () => {
  clearTimeout(resizeId);
  resizeId = setTimeout(resizeCanvas, 150);
});
resizeCanvas();

// Array para armazenar todas as estrelas
let stars = [];

// Função para escolher uma cor aleatória entre branco, lilás e roxo
function getRandomColor() {
  const colors = ["#ffffff", "#6c52e6", "#3009b1"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Criação inicial das estrelas (usa a constante STAR_COUNT)
for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * canvas.width, // Posição horizontal aleatória
    y: Math.random() * canvas.height, // Posição vertical aleatória
    radius: Math.random() * 1.5 + 0.5, // Tamanho da estrela (0.5 a 2.0)
    opacity: Math.random(), // Opacidade inicial (transparência)
    fadeSpeed: Math.random() * 0.01 + 0.002, // Velocidade de parpadeio (0.002 a 0.012)
    color: getRandomColor(), // Cor aleatória
    speed: Math.random() * 0.7 + 0.2, // Velocidade de queda (0.2 a 0.9)
  });
}

// Função principal de animação
function drawStars() {
  // Limpa o canvas a cada frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    // Atualiza a opacidade para fazer o parpadeio (oscilar entre 0 e 1)
    star.opacity += star.fadeSpeed;
    if (star.opacity >= 1 || star.opacity <= 0) {
      star.fadeSpeed = -star.fadeSpeed; // Inverte a direção do fade
    }

    // Move a estrela para baixo com sua velocidade única
    star.y += star.speed;

    // Se a estrela sair da tela por baixo, volta para o topo em posição aleatória
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }

    // Desenha a estrela
    ctx.globalAlpha = star.opacity;
    ctx.fillStyle = star.color;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  // Restaura opacidade padrão
  ctx.globalAlpha = 1;

  // Chama a próxima atualização da animação
  requestAnimationFrame(drawStars);
}

// Inicia a animação do fundo de estrelas respeitando prefers-reduced-motion
const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");

// Inicia a animação do fundo de estrelas (se permitido)
function startStars() {
  // Limpa um frame antes de iniciar
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(drawStars);
}

// Estado inicial (respeita a preferência do usuário)
if (!mqReduce.matches) {
  startStars();
}

// Se a preferência do sistema mudar, inicia/para a animação
mqReduce.addEventListener?.("change", (e) => {
  if (e.matches) {
    // Prefere menos movimento: limpa e não agenda novos frames
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    // Pode animar: inicia
    startStars();
  }
});

// Efeito Typewriter no Subtítulo
const text = "Frontend Developer & UX/UI Designer";
const typeEl = document.getElementById("typewriter"); // cache do elemento
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typeEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, TYPE_SPEED_MS); // Velocidade de digitação
  }
}

// Estado inicial do typewriter (respeita prefers-reduced-motion)
if (mqReduce.matches) {
  // Sem animação: escreve tudo de uma vez
  typeEl.textContent = text;
} else {
  // Com animação de digitação
  typeWriter();
}

// Seleciona o botão e o ícone
const toggleButton = document.getElementById("toggle-mode");
const modeIcon = document.getElementById("mode-icon");

// Função para alternar entre os modos (claro/escuro)
toggleButton.addEventListener("click", () => {
  // Alterna a classe "light-mode" no <body>
  const isLight = document.body.classList.toggle("light-mode");

  if (isLight) {
    // Se estiver no modo claro, exibe o ícone do sol
    modeIcon.src = "public/icons/sun.svg";
    modeIcon.alt = "Modo claro";
  } else {
    // Se estiver no modo escuro, exibe o ícone da lua
    modeIcon.src = "public/icons/moon-white.svg";
    modeIcon.alt = "Modo escuro";
  }

  // Atualiza atributo de acessibilidade para leitores de tela
  toggleButton.setAttribute("aria-pressed", String(isLight));
});
