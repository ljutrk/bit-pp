// 6. Write a function to convert a string to its abbreviated form. 

//    "John Snow" ->     "John S."
"use strict"

function stringSplitAndConvertToArray(string) {
    
    string = string.split(" ");
    string[1] = string[1].substring(0, 1) + ".";
    return string.join(" ");
}

console.log(stringSplitAndConvertToArray("John Snow"));