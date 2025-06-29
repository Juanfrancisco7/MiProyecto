// Referencias
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.getElementById("closeLightbox");

let lightboxAbierto = false;

// Función para abrir el lightbox
function abrirLightbox(imgSrc, captionText) {
  lightboxImg.setAttribute("src", imgSrc);
  lightboxCaption.textContent = captionText;
  lightbox.style.display = "flex";

  lightboxAbierto = true;
  history.pushState({ lightbox: true }, ""); // Añadir entrada al historial
}


// Función para cerrar el lightbox
function cerrarLightbox() {
  lightbox.style.display = "none";
  lightboxAbierto = false;

  // Si hay estado lightbox, retrocede el historial
  if (history.state && history.state.lightbox) {
    history.back();
  }
}

// Clic en las imágenes para abrir el lightbox
document.querySelectorAll(".galeria-img").forEach(img => {
  img.addEventListener("click", () => {
    const imgSrc = img.getAttribute("src");
    const captionText = img.getAttribute("data-caption") || ""; // fallback
    abrirLightbox(imgSrc, captionText);
  });
});

// Botón "X"
closeBtn.addEventListener("click", cerrarLightbox);

// Click fuera de la imagen para cerrar
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === closeBtn) {
    cerrarLightbox();
  }
});

// Tecla ESC para cerrar en computadoras
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightboxAbierto) {
    cerrarLightbox();
  }
});


// Botón "Atrás" del navegador
window.addEventListener("popstate", () => {
  if (lightboxAbierto) {
    cerrarLightbox();
  }
});