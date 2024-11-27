let perro="Geronimo";
console.log(perro+' esta chiquito y panzon');

function saludar(nombre){
    console.log("Hola "+nombre+"!");
}
saludar("Geros");

function suma(a,b){
    let resultado=a+b;
    return resultado;
}

function resta(a,b){
    let resultado=a-b;
    return resultado;
}

function multiplicacion(a,b){
    let resultado=a*b;
    return resultado;
}

function division(a,b){
    if(b==0){
        console.log("No se puede dividir por 0");
    }else{
        let resultado=a/b;
        return resultado;
    }
}

function modulo(a,b){
    let resultado=a%b;
    return resultado;
}
let num1=parseFloat(prompt("Ingrese el primer numero"));
let num2=parseFloat(prompt("Ingrese el segundo numero"));
let operador=prompt("ingrese el operador");

if(operador=="+"){
    let resultado=suma(num1,num2);
    console.log("El resultado es "+resultado);
}else if(operador=="-"){
    let resultado=resta(num1,num2);
    console.log("El resultado es "+resultado);
}else if(operador=="*"){
    let resultado=multiplicacion(num1,num2);
    console.log("El resultado es "+resultado);
}else if(operador=="/"){
    let resultado=division(num1,num2);
    console.log("El resultado es "+resultado);
}else if(operador=="%"){
    let resultado=modulo(num1,num2);
    console.log("El resultado es "+resultado);
}