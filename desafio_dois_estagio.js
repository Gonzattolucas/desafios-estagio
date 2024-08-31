function isFibonacci(num) {
    let a = 0;
    let b = 1;
    let temp;

    // Verifica se o número é 0 ou 1, que pertencem à sequência
    if (num === 0 || num === 1) {
        return true;
    }

    // Gera a sequência de Fibonacci até que o número gerado seja maior ou igual ao número fornecido
    while (b <= num) {
        if (b === num) {
            return true;
        }
        temp = a + b;
        a = b;
        b = temp;
    }

    return false;
}

// Número a ser verificado
let numberToCheck = 21;

// Verifica se o número pertence à sequência de Fibonacci
if (isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
