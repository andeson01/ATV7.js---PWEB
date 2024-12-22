    while (true) {
        let num = parseFloat(prompt('Digite os seus números e pare com 0: '));

        console.log('Você digitou: ' + num);

        if (num == 0) {
            console.log('Epa! Você parou.')
            break;
        }
    }