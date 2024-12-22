let num = parseFloat(prompt('Digite um número para descobrir se ele é primo: '));

function verificarPrimo(num){ 
    if (num <= 1) {
        return false;
    }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
            return false;
            }
        }
    return true;
}

    if (verificarPrimo(num)) {
        console.log(num + ' é um número primo!')
    } else {
        console.log(num + ' não é um número primo!')
    }