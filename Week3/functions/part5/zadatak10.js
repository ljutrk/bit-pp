// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
//     Input:  17    | 15
//     Output: true  | false
"use strict"

function isAPrimeNumber(inputNumber) {

    for (var i = 2; i < inputNumber / 2; i++) {
        if (inputNumber % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isAPrimeNumber(17));