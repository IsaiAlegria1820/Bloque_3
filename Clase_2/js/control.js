/*
Calcular area de un triangul0

base
altura

figura

ingresa base
ingresa altura

ingresa figura

si figura es igual a cuadrado
    base * altura
si figura es igual a triangulo
    base * altura / 2

de otro modo si figura es diferente de trianquglo y cuadrado
    figura no es un triangulo ni un cuadrado


*/
/*ejemplo 1*/
let clima= prompt("Hace frio o calor");

if(clima=="frio"){
    console.log("Ponte un sueter mijo");
}

if(clima=="calor"){
    console.log("Vamos a la playa");
}else{
    console.log("a chinga ¿pues que dije?");
}
    
/* estrucutra de control condicional de else if*/
/*ejemplo 2*/

let opcion=prompt("Escoja algo del menu pizza, pasta o ensalada");
if(opcion="Pizza"){
    console.log(" Has pedido Pizza");
}else if(opcion="Pasta"){
    console.log("Has pedido Pasta");
}else if(opcion="Ensalada"){
    console.log("Has pedido Ensalada");
}else{
    console.log("Esta opcion no esta disponible");
}

/* estructura de control ciclica for

for(inicializacion; condicion; incremento o actualizacion){
    codigo a repetir
}
*/
for(let i=1; i<=5; i++){
    console.log(i);
}

for(let inicio=0; inicio<=100;){
    console.log(inicio);   
    inicio+=50; 
}
