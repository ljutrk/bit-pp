// 5. Write a function to split a string and convert it into an array of words.

//    "John Snow" -> [ 'John', 'Snow' ]
"use strict"

function stringSplitAndConvertToArray(string) {
    
    string = string.split(" ");
    
    return string;
}

console.log(stringSplitAndConvertToArray("John Snow"));
