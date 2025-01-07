// Verificamos si ya se ha recargado la página
if (sessionStorage.getItem('pageReloaded')) {
    // Mostrar la notificación después de la recarga
    mostrarNotificacionRecarga();
    sessionStorage.removeItem('pageReloaded'); // Limpiar la variable de sesión
  }
  
  // Función para mostrar la notificación después de la recarga
  function mostrarNotificacionRecarga() {
    const notificacionRecarga = document.createElement("div");
    notificacionRecarga.classList.add("notificacion-recarga");
    notificacionRecarga.innerHTML = `
      <p>¿Ya visitaste <a href="https://www.mundojuan.com" target="_blank">MUNDOJUAN</a>? 
      Cuéntame tu experiencia <a href="https://www.mundojuan.com" target="_blank">aquí</a></p>
    `;
    
    // Añadimos la notificación al cuerpo del documento
    document.body.appendChild(notificacionRecarga);
  
    // Eliminar la notificación después de 8 segundos
    setTimeout(() => {
      notificacionRecarga.remove();
    }, 8000); // 8 segundos para eliminar la notificación
  }
  
  // Establecer que la página se ha recargado para mostrar la notificación
  if (!sessionStorage.getItem('pageReloaded')) {
    sessionStorage.setItem('pageReloaded', 'true');
  }
  