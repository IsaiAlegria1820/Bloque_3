/*Crear un programa que lea una calificacion y que nos diga si esta aprobado o no*/


let calificacion=parseFloat(prompt("Ingrese la calificacion del alumno"));
    


function evaluarCalificacion(calificacion){
  while(calificacion>100 || calificacion<0){
    console.log("Solo se aceptan calificaciones de 0 a 100")
    calificacion=parseFloat(prompt("ingrese la calificacion del alumno de nuevo"));
  }
  if(calificacion>100){
        console.log("Escriba una calificacion en el rango 0 a 100");
        tomarCalificacion();
    }else if(calificacion<=100 && calificacion>=90){
        console.log("Felicidades sacaste una calificacion excelente");
    }else if(calificacion>=75 && calificacion<90){
        console.log("Obtuviste una calificacion Buena");
    }else if(calificacion>=60 && califiacion<75){
        console.log("obtuviste una calificacion Suficiente");
    }else if(calificacion<60 && calificacion >=0){
        console.log("Reprobaste");
    }else if(calificacion < 0){
        console.log("Escriba una calificacion en el rango 0 a 100")
        tomarCalificacion();
    }     
}

evaluarCalificacion(calificacion);