const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Añade un evento de clic al botón "Sí"
yesBtn.addEventListener("click", () => {
  question.innerHTML = "¡Aaaaa, tú también me gustas! ";
  gif.src =
    "https://i.pinimg.com/originals/7f/eb/37/7feb374a2d80c0bd1b4fed714c641641.png";

  // Llama a la función para lanzar confeti con opciones personalizadas
  confetti({
    particleCount: 100,  // Cantidad de partículas de confeti
    spread: 100,         // Área de dispersión
    origin: { y: 0.8, x: 0.45 }   // Punto de origen (en este caso, cerca de la parte inferior)
  });
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
