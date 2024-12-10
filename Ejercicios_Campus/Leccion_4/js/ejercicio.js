let librosLeidos=[];

function agregarLibro(titulo){
    titulo= document.getElementById('tituloLibro');
    librosLeidos.push=titulo;
}

function mostrarLibrosLeidos(){
   
}

document.getElementById('formLibreria').addEventListener("submit", function(event){
    event.preventDefault();
    agregarLibro();
    mostrarLibrosLeidos();
});