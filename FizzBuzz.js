const resultado = FizzBuzz(true);
console.log(resultado);

function FizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'nao e um numero';
    if (entrada % 3 === 0)
        return 'Fizz';

    if (entrada % 5 === 0)
        return 'Buzz';

    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    return entrada;
}