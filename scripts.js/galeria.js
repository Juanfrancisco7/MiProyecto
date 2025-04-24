const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeLightbox');

document.querySelectorAll('.imagen-container img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;

    // Detectar si es móvil y aplicar rotación vertical
    if (window.innerWidth <= 768) {
      lightboxImg.classList.add('rotate-mobile');
    } else {
      lightboxImg.classList.remove('rotate-mobile');
    }

    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target === closeBtn) {
    lightbox.style.display = 'none';
  }
});
