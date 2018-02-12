// 3. Write a function that concatenates a given string n times (default is 1).
//     "Ha" -> "Ha"
//     "Ha", 3 -> "HaHaHa"
"use strict"
function stringConcatenate(word, number) {
    var concatenate = "";
    for (let i = 0; i < number; i++) {
        concatenate += word;
    }
    return concatenate;
}

console.log(stringConcatenate("Ha", 3));
