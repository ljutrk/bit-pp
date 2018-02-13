// 1. Write a function to count vowels in a provided string.
//    If you are  not aware of indexOf function, try to use switch statement.

"use strict"

function vowelCount(str) {

    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                counter++;
                break;
        }
    }
    return counter;
}

console.log(vowelCount("laborAtory"));
