let palavra = prompt('Digite uma palavra para saber se é um palíndromo: ');

let palindromo = true;

    for (let i = 0; i < palavra.length / 2; i++) { 
        if (palavra[i] != palavra[palavra.length - 1 - i]) {
            palindromo = false;
            break;
        }
    }
        if (palindromo) {
            alert('A palavra é um palíndromo!')
        } else {
            alert('A palavra não é um palíndromo!')
        }