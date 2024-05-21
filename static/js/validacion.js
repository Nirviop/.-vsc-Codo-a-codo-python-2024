function validarDatos() {
let nombre = document.getElementById("nombreCompleto").value.trim()
let dni = document.getElementById("dni").value.trim()
let nacimiento = document.getElementById("nacimiento").value.trim()
let email = document.getElementById("email").value.trim()
let error = document.getElementById("campos")

if(nombre === "" || dni === "" || nacimiento === "" || email === ""){
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

    if (dni.length !== 8 || isNaN(dni)) {
        error.textContent = "Por favor ingrese un DNI válido de 8 dígitos.";
        error.style.color = "red";
        return false;
    }

alert("Datos ingresados corectamente.")
return true
}