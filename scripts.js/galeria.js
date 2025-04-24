// Referencias
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.getElementById("closeLightbox");

// Abrir imagen al hacer click
document.querySelectorAll(".galeria-img").forEach(img => {
  img.addEventListener("click", () => {
    const imgSrc = img.getAttribute("src");
    const captionText = img.getAttribute("data-caption");

    lightboxImg.setAttribute("src", imgSrc);
    lightboxCaption.textContent = captionText;
    lightbox.style.display = "flex";
  });
});

// Cerrar al hacer click en la X o fuera de la imagen
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === closeBtn) {
    lightbox.style.display = "none";
  }
});
