// 3. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//    Note: Assume punctuation, numbers and symbols are not included in the passed string.

//    “Webmaster” -> “abeemrstw”
"use strict"

function stringAlphabeticalSort(string) {

    string = string.toLowerCase();
    string = string.split("").sort().join("");
    
    // array.sort();
    // var string = array.join("");

    return string;
}

console.log(stringAlphabeticalSort("Webmaster"));