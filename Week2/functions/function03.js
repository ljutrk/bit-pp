// 3. Write a function that checks if a given number is a three digit long number.
"use strict"
function num(x) {
    if (x > 99 && x < 1000) {
        return x + " is a 3 digit number!";
    } else {
        return x + " is not a 3 digit number!";
    }
}
console.log(num(1230));