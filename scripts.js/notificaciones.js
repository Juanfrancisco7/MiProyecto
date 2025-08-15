document.addEventListener("DOMContentLoaded", () => {
  // Verificamos si la página se ha recargado

  if (sessionStorage.getItem('pageReloaded')) {
      mostrarNotificacion(); // Muestra la notificación inmediatamente
      sessionStorage.removeItem('pageReloaded'); // Limpiar la variable de sesión
  } else {
      // Si es la primera vez que se abre la página, mostrar después de 10 segundos
      setTimeout(mostrarNotificacion, 10000); // 10 segundos
      sessionStorage.setItem('pageReloaded', 'true'); // Marcar para la próxima recarga
  }
});

// Función para mostrar la notificación
function mostrarNotificacion() {
  // Evita notificaciones duplicadas
  if (document.querySelector(".notificacion-recarga")) return;

  const notificacion = document.createElement("div");
  notificacion.classList.add("notificacion-recarga");
  notificacion.innerHTML = `
      <p>¿Ya visitaste <a href="https://www.mundojuan.com" target="_blank">MUNDOJUAN</a>? 
      Cuéntame tu experiencia <a href="https://www.mundojuan.com" target="_blank">aquí</a></p>
  `;
  
  // Añadir la notificación al cuerpo del documento
  document.body.appendChild(notificacion);

  // Eliminar la notificación después de 8 segundos
  setTimeout(() => notificacion.remove(), 8000);
}
