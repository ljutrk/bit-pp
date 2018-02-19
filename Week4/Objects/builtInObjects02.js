// 2. Write a JavaScript function that reverses a number.

//    12345 -> 54321
"use strict"

function reverseNumber(number) {

        number = number.toString(10);
        var array = number.split("");
        var reverseArray = array.reverse();
        var number = reverseArray.join("");
        number = parseInt(number, 10);
    return number;
}

console.log(reverseNumber(12345));


