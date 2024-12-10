//reto 1
function reto1(){
    const frutas=["manzana","pera","banana"];
    for(i=0;i<frutas.length;i++){
        console.log(frutas[i].toUpperCase());
    }
    //ejemplo profe
    for (let fruta of frutas) {
        console.log(fruta.toUpperCase());
    }
}



//reto 2
function reto2(){
    const libro={
        titulo: "El señor de los anillos",
        sipnosis:"El libro de la comunidad del anillo",
        año: 1954
    }
    
    console.log('objeto con todas sus caracteristicas',libro)
    libro.genero="Fantasia"
    console.log('objeto con la caracteristica genero agregada',libro)
    delete libro.año
    console.log('objeto con año eliminado',libro)
}

//reto 3

//normal
function paroImpar(num){
    if(num%2==0){
        console.log(num+" es par");
    }else{
        console.log(num+" es impar");
    }
}

//explicita
const parImpar=function(num){
    if(num%2==0){
        console.log(num+" es par");
    }else{
        console.log(num+" es impar");
    }
}

//flecha
const parImpar2= (num) => num%2==0?console.log(num+" es par"):console.log(num+" es impar");


//anonima
(function(num){
    console.log(num%2==0?num+" es par":num+" es impar");
})(5);

function reto3(num){
    paroImpar(num);
    parImpar(num);
    parImpar2(num);
}

function probandoFunciones(){
    console.log("Reto final")
    reto1();
    reto2();
    const num=754;
    reto3(num);
}

probandoFunciones();