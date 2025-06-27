// Inicializa EmailJS con tu usuario
emailjs.init("MozjG_1EF6MduDcEx");  // Tu Public Key

// Función para manejar el envío del formulario
document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault();

  const btn = document.getElementById('button');
  btn.innerText = 'Enviando...';

  const serviceID = 'service_1fd29qg';
  const templateID = 'template_lhkn88h';

  emailjs.sendForm(serviceID, templateID, this)
    .then(function(response) {
      console.log("Mensaje enviado con éxito", response);
      document.getElementById("miFormulario").reset();
      btn.innerText = 'Enviar mensaje';

      mostrarNotificacionFormulario(
        "Gracias por contactar a Juan Francisco. Debido a una alta demanda de mensajes, es posible que la respuesta tome un poco más de tiempo de lo habitual. Si tu consulta es urgente, te recomendamos contactarlo por otra vía disponible.",
        "success"
      );
    }, function(error) {
      console.error("Error al enviar el mensaje", error);
      alert("Error al enviar el mensaje. Inténtalo de nuevo.");
      btn.innerText = 'Enviar mensaje';

      mostrarNotificacionFormulario("Hubo un error al enviar el mensaje. Inténtalo de nuevo.", "error");
    });
});

// ✅ Función con notificación mejorada
function mostrarNotificacionFormulario(mensaje, tipo) {
  const notificacion = document.createElement("div");
  notificacion.classList.add("notificacion-flotante");
  notificacion.innerHTML = `
    <div class="notificacion-icono">${tipo === "success" ? "✅" : "❌"}</div>
    <div class="notificacion-mensaje">${mensaje}</div>
  `;

  // Estilos embebidos
  Object.assign(notificacion.style, {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: tipo === "success" ? "#28a745" : "#dc3545",
    color: "#fff",
    padding: "15px 25px",
    borderRadius: "8px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    fontSize: "0.95rem",
    fontWeight: "500",
    zIndex: "9999",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    maxWidth: "90%",
    textAlign: "center",
    animation: "deslizarNoti 0.4s ease forwards"
  });

  document.body.appendChild(notificacion);

  // Estilo animación
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes deslizarNoti {
      from {
        opacity: 0;
        transform: translate(-50%, -20px);
      }
      to {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }
  `;
  document.head.appendChild(style);

  
  // Eliminar notificación después de 10 segundos
  setTimeout(() => {
    notificacion.remove();
  }, 10000);

  // Recargar página después de 10 segundos
  setTimeout(() => {
    location.reload();
    window.scrollTo(0, 0);
  }, 10000);
}