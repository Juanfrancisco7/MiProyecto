const inputs =  document.querySelectorAll(".input");
const textareas = document.querySelectorAll(".textarea");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        console.log(input.target.validity)
        validaInput(input.target);
    });
});
textareas.forEach((input) => {
    input.addEventListener("blur", (input) => {
        console.log(input.target.validity)
        validaTextarea(input.target)
    });
});
function validaInput(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input)
    }

}
function validaTextarea(input){
    const tipoDeTextarea = input.dataset.tipo;
    if(validadores[tipoDeTextarea]){
        validadores[tipoDeTextarea](input)
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("textarea-container--invalid");
        input.parentElement.querySelector(".textarea-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("textarea-container--invalid");
        input.parentElement.querySelector(".textarea-message-error").innerHTML = mostrarMensajeDeError(tipoDeTextarea,input)
    }

}

const validadores = {
}

const tipoDeError = [
    "valueMissing",
    "typeMismatch"
]

const mensajesDeError = { 
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio" 
    },
    email: { 
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido (Ejemplo@dominio.com) " 
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio"
    },
    mensaje: {
        valueMissing:"Este campo no puede estar vacio"
    }
}


function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeError.forEach(error =>{
        if(input.validity[error]){
            console.log(tipoDeInput, error)
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje
}