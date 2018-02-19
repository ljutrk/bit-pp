// 4. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters
//    so they are sorted from A to Z.
//    "Republic of Serbia" -> "Rbbceilu fO Sabeir"
"use strict"

function alphabetizeWords(string) {
    var array = string.split(" ");
    var newArr =[];
    
    for (var i = 0; i < array.length; i++) {
       var element = array[i];
       element = element.split("").sort().join("");
       array[i] = element;  
    }
    return array.join(" ");
}

console.log(alphabetizeWords("Republic of Serbia"));
