window.addEventListener("load", () => {
  // Disparar animaciones una vez al cargar
  triggerSobreMiAnimation();
});

window.addEventListener("scroll", () => {
  triggerSobreMiAnimation();
});

function triggerSobreMiAnimation() {
  const textos = document.querySelectorAll(".sobre-mi__texto");

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollingDown = scrollTop > (window.lastScrollTop || 0);
  window.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  textos.forEach((texto) => {
    if (!texto) return;

    const rect = texto.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      texto.classList.remove("visible-up", "visible-down");

      if (scrollingDown) {
        texto.classList.add("visible-down");
      } else {
        texto.classList.add("visible-up");
      }
    } else {
      texto.classList.remove("visible-up", "visible-down");
    }
  });
}