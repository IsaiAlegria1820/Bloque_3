/*ADIVINADOR

un programa en donde nosotros (usuario) intente adivinar un numero aleatorio secreto que tenga la computadora

1) usar una funcion para generar un numero aleatorio
2) usar una funcion que se encargue de manejar nuestros intentos
3) usar variables locales y globales (escope o alcance de variables)+
4 Dar un mensaje al usuario si adivino o no

*/
//Variable global
let bienvenida="Bienvenido al adivinador";

function generaNumeroAleatorio(){
    //variable local se utiliza en solo en la funcion si se intenta usar fuera de la funcion genarara un error
    // ya que solo existe en la funcion
    var numeroAleatorio= Math.floor(Math.random() * 600)+ 1;
    return numeroAleatorio;
}
//fucnion para jugar
function jugar(){
    console.log(bienvenida);
    let intentos=0;
    let adivinado=false;

    //se usa const por que es una variable que no debe cambiar por lo tanto es una constante
    const numeroAleatorio=generaNumeroAleatorio();

    while (!adivinado) {
        let intento=parseInt(prompt("Ingrese un numero entre el 1 y el 600"));    
        intentos++;
        if (intento===numeroAleatorio) {
            adivinado=true;
            console.log( `Felicidades adivinaste el numero ${numeroAleatorio} en ${intentos} intentos`);	
        }
        else if (intento< numeroAleatorio) {
            console.log("El numero es mayor");
        }
        else if(intento > numeroAleatorio){ 
            console.log("El numero es menor");
        }
        else if(intento > 600 || intento < 1){
            console.log("El numero debe estar entre el 1 y el 600");
        }else{
            console.log("ingrese un numero");
        }
    }
}

jugar();