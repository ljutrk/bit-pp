// 1. Write a function to convert a number from one base (radix) to another. 
//    Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;
//    'ff', 16, 8 -> 377
"use strict"

function baseChange(number, numberBase, newBase) {
    var tempString = new String(number);

    if (typeof number === "string") {
        number = parseInt(number, numberBase);
        console.log(number);
        number = number.toString(newBase);
        console.log(number);
        number = parseInt(number, 10);
        console.log(number);
    } else if (typeof number === "number") {
        number = number.toString(newBase);
        number = parseInt(number, 10);
    }
    
    return number;
}

console.log(baseChange(255, 10, 8));

