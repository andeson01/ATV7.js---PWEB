let result = 1;

for (let i = 1; i <= 5; i++) {
        let nums = parseFloat(prompt('Digite os números para calcular a multiplicação acumulativa: '));
        
        result *= nums;

    }   console.log('A multiplicação acumulada é igual à: ' + result);