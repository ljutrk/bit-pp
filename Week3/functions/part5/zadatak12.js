// 12. Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
//     Input:  192 42 | 81 9
//     Output: 6      | 9
"use strict"

function greatestCommonDivisor(inputNumber1, inputNumber2) {

    var minNumber;
    if (inputNumber1 > inputNumber2) {
        minNumber = inputNumber1;
    } else {
        minNumber = inputNumber2;
    }

    var greatestCommonDivisor = 1;

    for (var i = 2; i < minNumber; i++) {
        if (inputNumber1 % i === 0 && inputNumber2 % i === 0) {
            greatestCommonDivisor = i;
        }
    }
    return greatestCommonDivisor;
}

console.log(greatestCommonDivisor(192, 42))
