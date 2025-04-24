// Obtener el botón y el contenido
const toggleButton = document.getElementById('toggleButton');
const navContent = document.getElementById('navContent');

// Agregar evento al botón
toggleButton.addEventListener('click', function() {
  navContent.classList.toggle('active');
});