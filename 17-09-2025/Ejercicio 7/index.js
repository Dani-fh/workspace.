
function MostrarNombre(){
    const nombre = document.getElementById("nombre");

    const primerNombre = document.createElement('span');
    const apellido = document.createElement('i');

    primerNombre.innerHTML = "Daniel ";
    apellido.innerHTML = "Fonseca";

    nombre.appendChild(primerNombre);
    nombre.appendChild(apellido);
}


function OcultarNombre(){
    const nombre = document.getElementById("nombre");
    nombre.innerText = "";
}