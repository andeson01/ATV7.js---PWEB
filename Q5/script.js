let nums = [4, 10, 2, 5, 7, 1];

let numMaior = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > numMaior) {
            numMaior = nums[i];
        } 
}   console.log('O número maior da array é: ' + numMaior);