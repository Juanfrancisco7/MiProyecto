// Botón de menú hamburguesa

const toggleButton = document.getElementById('toggleButton');
const navContent = document.getElementById('navContent');

toggleButton.addEventListener('click', () => {
  navContent.classList.toggle('active');
});

// Ocultar/mostrar cabecera al hacer scroll
let lastScrollTop = 0;
const header = document.querySelector('.head');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll hacia abajo -> ocultar
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scroll hacia arriba -> mostrar
    header.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});