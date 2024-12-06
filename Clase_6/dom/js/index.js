let contador=0;
function cambiarTexto(){
    document.getElementById("parrafo").innerHTML = "Texto cambiado";
}

function cambiarFondo(){
    const colorActual = document.body.style.backgroundColor;
    document.body.style.backgroundColor= colorActual === "black" ? "white" : "black";
}

function presioname(){
    contador++;
    document.getElementById("contador").innerText = contador;
}

function reiniciarContador(){
    contador=0;
    document.getElementById("contador").innerText = contador;
}