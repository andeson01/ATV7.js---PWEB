let num1 = 0;
let num2 = 1;

    console.log(num1);
    console.log(num2);

for (let i = 3; i <= 10; i++) {
    let nextnum = num1 + num2;

    console.log(nextnum);

    num1 = num2;
    num2 = nextnum;
    
}