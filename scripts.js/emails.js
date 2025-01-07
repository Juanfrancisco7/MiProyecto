// Inicializa EmailJS con tu usuario
emailjs.init("MozjG_1EF6MduDcEx");  // Reemplaza con tu User ID de EmailJS

// Función para manejar el envío del formulario
document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  // Cambiar el texto del botón para indicar que se está enviando
  const btn = document.getElementById('button');
  btn.value = 'Enviando...';

  // Enviar el formulario a través de EmailJS
  const serviceID = 'service_1fd29qg';  // Tu Service ID de EmailJS
  const templateID = 'template_lhkn88h';  // Tu Template ID de EmailJS

  emailjs.sendForm(serviceID, templateID, this)
    .then(function(response) {
      console.log("Mensaje enviado con éxito", response);
      document.getElementById("miFormulario").reset(); // Limpiar el formulario
      btn.value = 'Enviar mensaje';  // Restaurar el texto del botón
      mostrarNotificacion("Su mensaje ha sido enviado con éxito. Para cualquier asunto urgente, le recomendamos comunicarse a través de otros canales, ya que esta vía puede tener tiempos de respuesta más largos.", "success");
    }, function(error) {
      console.log("Error al enviar el mensaje", error);
      alert("Error al enviar el mensaje. Inténtalo de nuevo.");
      btn.value = 'Enviar mensaje';  // Restaurar el texto del botón
      mostrarNotificacion("Hubo un error al enviar el mensaje. Inténtalo de nuevo.", "error");
    });
});

// Función para mostrar la notificación
function mostrarNotificacion(mensaje, tipo) {
  const notificacion = document.createElement("div");
  notificacion.classList.add("notificacion");
  notificacion.innerHTML = `<p>${mensaje}</p>`;
  if (tipo === "success") {
    notificacion.style.backgroundColor = "#4caf50"; // Color verde para éxito
  } else if (tipo === "error") {
    notificacion.style.backgroundColor = "#f44336"; // Color rojo para error
  }

  // Añadimos la notificación al cuerpo del documento
  document.body.appendChild(notificacion);

  // Eliminar la notificación después de 8 segundos
  setTimeout(() => {
    notificacion.remove();
  }, 8000); // 8 segundos para eliminar la notificación

  // Recargar la página y desplazarse al inicio
  setTimeout(() => {
    location.reload(); // Recargar la página después de 8 segundos
    window.scrollTo(0, 0); // Aseguramos que la página se desplaza al principio
  }, 8000);
}
