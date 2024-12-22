let array = [1,2,3,4,5];

let arrayInvertida = [];

    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertida[array.length - 1 - i] = array[i];
    }   console.log(arrayInvertida);