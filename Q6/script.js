let num = parseFloat(prompt('Digite um número para calcular o seu fatorial: '));

    if (num < 0) {
        alert('Digite um número positivo!!')
    } else {
        let fatorial = 1;

        for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }   console.log('O fatorial do número digitado é: ' + fatorial);
}   
        