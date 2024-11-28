let librosLeidos=[];
function agregarLibro(){
    let libro = prompt("Ingrese el nombre del libro");
    librosLeidos.push(libro);
}

function mostrarLibrosLeidos(){
   console.log(librosLeidos);
}

for(i = 1 ; i <= 5; i++){
    agregarLibro();
}
mostrarLibrosLeidos();
