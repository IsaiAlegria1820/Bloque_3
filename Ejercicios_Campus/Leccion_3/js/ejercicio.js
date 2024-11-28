/*crear un array con varios tipos de frutas, contabilizar cuantas frutas hay de acuerdo al tipo de fruta e imprimirlo*/

let frutas=["manzana","pera","banana","kiwi","mango","manzana","kiwi","banana","banana","mango"];

let contadorManzana=0;
let contadorPera=0;
let contadorBanana=0;
let contadorKiwi=0;
let contadorMango=0;

for (let i = 0; i < frutas.length; i++) {
    if(frutas[i]=="manzana"){
        contadorManzana++;
    }else if(frutas[i]=="pera"){
        contadorPera++;
    }else if(frutas[i]=="banana"){
        contadorBanana++;
    }else if(frutas[i]=="kiwi"){
        contadorKiwi++;
    }else if(frutas[i]=="mango"){
        contadorMango++;
    }
}
console.log("Manzana: "+contadorManzana);
console.log("Pera: "+contadorPera);
console.log("Banana: "+contadorBanana);
console.log("Kiwi: "+contadorKiwi);
console.log("Mango: "+contadorMango);
