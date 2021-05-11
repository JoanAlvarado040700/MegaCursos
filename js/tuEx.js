const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('correo');
const pass = document.getElementById('contraseña');

const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');

form.addEventListener("submit", e=> {
    e.preventDefault();
    let warnings = ""
    if(nombre.value.length <6 ){
        alert('nombre demaciado corto');
        warnings += `El nombre no es valido`
    }
}) 