// 4. Write a function that takes a number and returns array of its digits.

"use strict"

function numberToArrOfDigits(num) {
    var numberString = num + "";
    var numberArray = [];

    for (let i = 0; i < numberString.length; i++) {
        numberArray[i] = parseFloat(numberString[i]);
    }
    return numberArray;
}

console.log(numberToArrOfDigits(87129375));
