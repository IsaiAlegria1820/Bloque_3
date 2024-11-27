/*
Crea un algroritmo que cuente del 1 al 80 y que indique si el numero es par o impar

requisitos
1) usar un ciclo for para recorrer del 1 al 20
2) utiliza una condicional para verificar si es par o impar
3) imprimir el numero con el mensaje indicando si es par o impar

Salida esperada
1 es impar
2 es par
3 es impar
4 es par
...
listo sir o lady
*/
for (let i = 1; i <= 80; i++) {
    valor=i%2;
    if(valor==0){
        console.log(i+" es par");
    }else{
        console.log(i+" es impar");
    }
}
console.log("listo sir o lady");
