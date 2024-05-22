function validarDatosContacto() {
let nombre = document.getElementById("nombre").value.trim()
let email = document.getElementById("email").value.trim()
let mensaje = document.getElementById("mensaje").value.trim()
let error = document.getElementById("campos")

if(nombre === "" || email === "" || mensaje === "" ){
    error.textContent = "Por favor complete todos los campos."
    error.style.color= "red"
    return false
}

// Verificar si el nombre contiene solo 
    //caracteres alfabéticos 
    if(!/^[a-zA-Z]+$/.test(nombre)){
        error.textContent = "Por favor complete un nombre válido."
        error.style.color= "red";
        return false
    }

alert("Datos ingresados corectamente.")
return true
}