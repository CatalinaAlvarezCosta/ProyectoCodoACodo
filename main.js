document.getElementById("mensaje").addEventListener("input", validarTexto); 

document.getElementById("email").addEventListener("input", validarTexto);

document.getElementById("nombre").addEventListener("input", validarTexto);

function validarTexto(event) {
    if(event.target.value.length > 2){
        event.target.style.borderColor = 'green';
    }else{
        event.target.style.borderColor = 'red';
    }
}