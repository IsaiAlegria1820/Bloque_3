let librosLeidos=[];

function agregarLibro(titulo){
     const libro={
        id: Date.now(),
        titulo
     }; 
    librosLeidos.push(libro);
    console.log(librosLeidos)
    mostrarLibrosLeidos();
}

function mostrarLibrosLeidos(){
   const listaTitulos= document.getElementById('listaTitulos');
   listaTitulos.innerHTML="";
   librosLeidos.forEach(libro =>{
    const listItem= document.createElement('li');
    listItem.innerHTML=`
    <div>
        <h5>${libro.titulo}</h5>
    </div>
    `;
    listaTitulos.appendChild(listItem);
    })   
}

document.getElementById('formLibreria').addEventListener("submit", function(event){
    event.preventDefault();
    const titulo=document.getElementById("tituloLibro").value;
    agregarLibro(titulo);
    event.target.reset()
});