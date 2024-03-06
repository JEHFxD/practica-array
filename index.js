function generarArray(altura, minimo, maximo) {
    let array = [];
    for (let i = 0; i < altura; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        array.push(numeroAleatorio);
    }
    return array;
}

let miArray = generarArray(30, 5, 210);
console.log(miArray);
