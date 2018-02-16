// 1. Write a function to count vowels in a provided string.
//    If you are  not aware of indexOf function, try to use switch statement.

"use strict"

function vowelCount(str) {
    str = str.toLowerCase();

    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                counter++;
                break;
        }
    }
    return counter;
}

console.log(vowelCount("labOrAtory is a scary place!"));
