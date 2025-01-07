// Validación de formulario

// Selección de todos los inputs y textareas en el formulario
const inputs = document.querySelectorAll(".input");
const textareas = document.querySelectorAll(".textarea");

// Evento blur para inputs
inputs.forEach((input) => {
    input.addEventListener("blur", (inputEvent) => {
        validaInput(inputEvent.target);
    });
});

// Evento blur para textareas
textareas.forEach((textarea) => {
    textarea.addEventListener("blur", (textareaEvent) => {
        validaTextarea(textareaEvent.target);
    });
});

// Validación de inputs
function validaInput(input) {
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

// Validación de textareas
function validaTextarea(textarea) {
    const tipoDeTextarea = textarea.dataset.tipo;

    if (validadores[tipoDeTextarea]) {
        validadores[tipoDeTextarea](textarea);
    }

    if (textarea.validity.valid) {
        textarea.parentElement.classList.remove("textarea-container--invalid");
        textarea.parentElement.querySelector(".textarea-message-error").innerHTML = "";
    } else {
        textarea.parentElement.classList.add("textarea-container--invalid");
        textarea.parentElement.querySelector(".textarea-message-error").innerHTML = mostrarMensajeDeError(tipoDeTextarea, textarea);
    }
}

// Objeto con validadores personalizados
const validadores = {
    telefono: (input) => {
        const regexTelefono = /^[0-9]{10}$/;
        if (!regexTelefono.test(input.value)) {
            input.setCustomValidity("El número de teléfono debe tener exactamente 10 dígitos.");
        } else {
            input.setCustomValidity("");
        }
    }
};

// Lista de tipos de error a validar
const tipoDeError = ["valueMissing", "typeMismatch", "tooShort", "patternMismatch", "customError"];

// Mensajes de error personalizados
const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
        tooShort: "El nombre debe tener al menos 3 caracteres."
    },
    email: {
        valueMissing: "El campo email no puede estar vacío.",
        typeMismatch: "El correo ingresado no tiene un formato válido."
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacío.",
        tooShort: "El mensaje debe contener al menos 10 caracteres."
    }
};

// Función para generar un mensaje de error dinámicamente
function mostrarMensajeDeError(tipoDeCampo, input) {
    let mensaje = "";
    tipoDeError.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeCampo][error];
        }
    });
    return mensaje;
}

// Función para validar todo el formulario al enviarlo
function validarFormulario(event) {
    event.preventDefault(); // Prevenir envío automático

    let formularioValido = true;

    inputs.forEach((input) => {
        validaInput(input);
        if (!input.validity.valid) {
            formularioValido = false;
        }
    });

    textareas.forEach((textarea) => {
        validaTextarea(textarea);
        if (!textarea.validity.valid) {
            formularioValido = false;
        }
    });

    if (formularioValido) {
        mostrarNotificacion(); // Mostrar mensaje de confirmación
    } else {
        console.log("Hay errores en el formulario.");
    }
}

// Función para mostrar la notificación cortés
function mostrarNotificacion() {
    const notificacion = document.createElement("div");
    notificacion.classList.add("notificacion");
    notificacion.innerHTML = `
        <p>¡Mensaje enviado satisfactoriamente!</p>
        <p>Sin embargo, te recomendamos contactar directamente con el destinatario, ya que por motivos laborales la respuesta podría demorarse.</p>
    `;

    document.body.appendChild(notificacion);

    // Eliminar notificación después de 5 segundos
    setTimeout(() => {
        notificacion.remove();
    }, 5000);
}

// Asignar la validación al evento submit del formulario
const formulario = document.querySelector("#miFormulario");
formulario.addEventListener("submit", validarFormulario);

// Estilos CSS para la notificación
const style = document.createElement("style");
style.innerHTML = `
    .notificacion {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4caf50;
        color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
        z-index: 1000;
        animation: fadein 0.5s, fadeout 0.5s 4.5s;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeout {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function() {
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
});

