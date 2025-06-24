/*
 // Mostrar mensaje de donación al inicio
if (!sessionStorage.getItem('donationMessageShown')) {
  mostrarMensajeDonacion();
}

function mostrarMensajeDonacion() {
  // Crear el contenedor del mensaje
  const mensajeDonacion = document.createElement("div");
  mensajeDonacion.classList.add("mensaje-donacion");
  mensajeDonacion.innerHTML = `
    <h2>Si deseas ser parte de este maravilloso proyecto y contribuir a su realización, te invitamos a hacer una donación para que <a href="https://www.mundojuan.com" target="_blank" class="mundojuan-link">MundoJuan</a> se haga realidad lo antes posible. Tu apoyo es fundamental para llevar esta iniciativa. ¡Gracias!</h2>
    <div class="paypal-container">
      <a href="https://www.paypal.me/juanfchacin7" target="_blank">
        <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp_cc_mark_37x23.jpg" alt="PayPal" class="paypal-logo">
      </a>
    </div>
    <button id="continuar" class="continuar-btn">Continuar</button>
    <p id="contador">Redirigiendo en 5 segundos...</p>
  `;


  // Añadir el mensaje al cuerpo del documento
  document.body.appendChild(mensajeDonacion);


  // Configurar el contador de 15 segundos
  let countdown = 15;
  const contadorElem = document.getElementById('contador');
  const intervalo = setInterval(() => {
    contadorElem.innerText = ` ${countdown--}`;
    if (countdown < 0) {
      clearInterval(intervalo);
      mensajeDonacion.remove(); // Eliminar el mensaje de donación si se agota el tiempo
    }
  }, 1000);


  // Manejar el botón "Continuar"
  const continuarBtn = document.getElementById('continuar');
  continuarBtn.addEventListener('click', () => {
    clearInterval(intervalo); // Detener el contador si se hace clic
    mensajeDonacion.remove(); // Eliminar el mensaje de donación
  });

  // Marcar que el mensaje ha sido mostrado en esta sesión
  sessionStorage.setItem('donationMessageShown', 'true');
}
*/


