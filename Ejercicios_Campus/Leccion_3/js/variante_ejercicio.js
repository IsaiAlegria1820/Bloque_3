/*crear un array con varios tipos de frutas, contabilizar cuantas frutas hay de acuerdo al tipo de fruta e imprimirlo*/

let frutas2=["manzana","pera","banana","kiwi","mango","manzana","kiwi","banana","banana","mango"];

let manzanas=0;
let peras=0;
let bananas=0;
let kiwis=0;
let mangos=0;

let indice=0;
console.log("variante de ejercicio");

while(indice < frutas2.length){
    if(frutas2[indice]=="manzana"){
        manzanas++;
    }else if(frutas2[indice]=="pera"){
        peras++;
    }else if(frutas2[indice]=="banana"){
        bananas++;
    }else if(frutas2[indice]=="kiwi"){
        kiwis++;
    }else if(frutas2[indice]=="mango"){
        mangos++;
    }

    indice++;
}
console.log("Manzanas: "+manzanas);
console.log("Peras: "+peras);
console.log("Bananas: "+bananas);
console.log("Kiwi: "+kiwis);
console.log("Mangos: "+mangos);