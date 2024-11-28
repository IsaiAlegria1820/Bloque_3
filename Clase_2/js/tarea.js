/*generador de tablas de multiplicar*/

function pedirNumero(){
    let numero=parseFloat(prompt("Ingrese un numero"));
    return numero;
}

function generarTabla(num){
    for (let i = 1; i <= 10; i++) {
        let resultado=num*i;
        console.log(`${num} x ${i} = ${resultado}`);
    }
}

generarTabla(pedirNumero());