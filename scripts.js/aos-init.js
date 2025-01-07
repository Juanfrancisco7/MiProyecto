// Inicialización de AOS (animaciones)
AOS.init({
    duration: 1500, // Duración de las animaciones en milisegundos
    once: true      // La animación ocurre una sola vez
  });
  
  // Esperamos a que el DOM esté completamente cargado
  document.addEventListener("DOMContentLoaded", function () {
  
    // Selección de todos los párrafos dentro de la clase .sobre-mi__texto
    const paragraphs = document.querySelectorAll(".sobre-mi__texto");
  
    // Creamos una función que se ejecutará cuando el párrafo esté visible
    const paragraphObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Añadimos la clase visible cuando el párrafo entra en el viewport
        }
      });
    }, {
      threshold: 0.5 // 50% del párrafo visible
    });
  
    // Observamos cada párrafo
    paragraphs.forEach(paragraph => {
      paragraphObserver.observe(paragraph);
    });
  
    // Animación en imágenes (AOS)
    const images = document.querySelectorAll(".experiencia__container__img");
    images.forEach((img) => {
      img.setAttribute('data-aos', 'fade-up');
    });
  });
  