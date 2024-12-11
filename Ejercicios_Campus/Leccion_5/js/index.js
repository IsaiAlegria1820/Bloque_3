const librosLeidos=[]

function añadirLibro(titulo,autor,genero,anio){ 
    const libro={
        id: Date.now(),
        titulo,
        autor,
        genero,
        anio
    }
    librosLeidos.push(libro);
    mostrarLibrosLeidos();
}

function mostrarLibrosLeidos(){
    const listaLibros= document.getElementById('libros');
    listaLibros.innerHTML="";
    librosLeidos.forEach(libro => {
        const listItem= document.createElement('li');
        listItem.innerHTML=`
        <div>
        <h5>${libro.titulo}</h5>
        <button onclick="agregarCapitulo(${libro.id})">Añadir Capitulo</button>
        </div>
        <div id="capitulos">
        </div>
        `;
        listaLibros.appendChild(listItem);
    })
}

function agregarCapitulo(idLibro){
}

document.getElementById('formLibreria').addEventListener("submit", function(event){
    event.preventDefault();
    const titulo=document.getElementById("tituloLibro").value;
    const autor=document.getElementById("autorLibro").value;
    const genero=document.getElementById("generoLibro").value;
    const anio=document.getElementById("anioLibro").value;
    
    añadirLibro(titulo,autor,genero,anio);
    event.target.reset()
});