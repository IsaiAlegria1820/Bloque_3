//Arreglos
//Los arreglos son listas ordenada de datos que puedes recorrer, modificar y usar de mil maneras

const arregAlumnis=['Benjamin', 'Berenice', 'Brian', 'Carlos', 'Jesus','Jona'];

console.log(arregAlumnis);
arregAlumnis.push('Jose'); //funcion interna de js con arreglos .push(agrega un elemento al final del arreglo)
console.log(arregAlumnis);

arregAlumnis.pop()//funcion interna de js con arreglos .pop (quita/elimina el ultimo elemento de la lista o del arreglo)
console.log(arregAlumnis);

arregAlumnis.forEach((alumno)=>{
    console.log(" Mi alumno favorito es"+alumno);
})

const i=[2,0,5];
const j=[i,[1,2,3],[4,5,6]]//matriz;
console.log(j);

//objetos
let carro ={
    matricula: '1234',
    color: 'azul',
    marca: 'ford',
    modelo: 'fiesta',
    año:'2021',
    serie:'1234'
}

console.log(carro);
console.log(carro.color)

//modificar objeto existente
console.log("objeto carro antes de ser modificado "+ carro.matricula);
carro.matricula="19-23"
console.log("objeto carro despues de ser modificado "+ carro.matricula);

//se agrega un atributo nuevo al objeto
console.log(carro);    
carro.tipo="Estandar";
console.log(carro);

//eliminar un atributo a un objeto
console.log(  `objeto carro con sus atributos`,carro);
delete carro.tipo;
console.log(  `objeto carro despues de borrar atributos`,carro);

//Funciones

//normal o declarativa
//usar siempre y cuando se reutiliza el codigo

function sumar(a,b){
    return a+b;
}
console.log('funcion normal o declarativa', sumar(1,2))

//expresiva
//cuando la funcion esta asociada a una variable
const sumarExpresiva= function(a,b){
    return a+b;
}
console.log('funcion Expresiva', sumarExpresiva(1,2))

//funcion flecha
const sumarFlecha=(a,b)=> a+b;
console.log('funcion flecha', sumarFlecha(1,2))

//funcion anonima
(function (a,b){
    console.log('funcion anonima', a+b);
})(1,2)