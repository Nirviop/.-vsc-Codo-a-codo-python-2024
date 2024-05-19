function validarDatos() {
let nombre = document.getElementById("nombre completo").value.trim()
let dni = document.getElementById("dni").value.trim()
let nacimiento = document.getElementById("nacimiento")
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
        error.style.color= "red"
        return false
    }

if(dni.lenght !== 8){
    error.textContent = "Por favor ingrese un DNI válido"
    error.style.color= "red"
    return false
}

if(isNaN(dni)){
    error.textContent = "Por favor ingrese un DNI válido"
    error.style.color= "red"
    return false
}

alert("Datos ingresados corectamente.")
return true
}