let num = parseFloat(prompt('Digite um número para descobrir a sua tabuada: '));

for (let i = 1; i <= 10; i++) {
    result = num * i;
    console.log(num + 'x' + i + ' = ' +  result);
}