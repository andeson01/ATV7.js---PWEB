let palavra = prompt('Digite uma palavra: ');

let palavraInv = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInv += palavra[i];
    }   console.log('A sua palavra invertida é: ' + palavraInv);