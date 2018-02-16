// 8. Write a program that takes a string and prints its characters out in reversed order in the console.
//    Input:  Belgrade Institute of Technology
//    Output: ygolonhceT fo etutitsnI edargleB
"use strict"

var inputString = "Belgrade Institute of Technology";
var result = "";

for (var i = inputString.length - 1; i >= 0; i--) {
    result += inputString[i];
}

console.log(result);