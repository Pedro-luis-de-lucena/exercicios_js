exibitnumerosprimos(15);

function exibitnumerosprimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (numeroprimo(numero)) console.log(numero)
    }
}

function numeroprimo(numero) {

    let primo = true;
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true
}