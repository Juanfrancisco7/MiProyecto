// Inicialización de AOS (animaciones)
AOS.init({
  duration: 1500,   // Duración de las animaciones
  once: false,      // 👈 Esto permite que se repita la animación
  mirror: true,     // 👈 Esto hace que se anime también al subir
  delay: 200
});

// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

  // Animación en párrafos de "Sobre mí"
  const paragraphs = document.querySelectorAll(".sobre-mi__texto");

  const paragraphObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // opcional: para que desaparezcan al salir
      }
    });
  }, {
    threshold: 0.5
  });

  paragraphs.forEach(paragraph => {
    paragraphObserver.observe(paragraph);
  });

  
  // Añade data-aos dinámicamente a las imágenes (si no lo haces en HTML)
  const images = document.querySelectorAll(".experiencia__container__img");
  images.forEach((img) => {
    img.setAttribute('data-aos', 'fade-up');
  });
});