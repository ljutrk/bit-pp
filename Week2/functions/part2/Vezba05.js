// 5.Write a function to find the position of the first occurrence of a character in a string.
// The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.
"use strict"
function letterIteration(str, letter) {
    var location = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            location = i + 1;
            break;
        } else {
            location = -1;
        }
    }
    return location;
}

console.log(letterIteration("informatika", "z"));

