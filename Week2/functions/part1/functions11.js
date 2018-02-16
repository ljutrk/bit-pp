// 11. Write a function that concatenates a given string given number of times.
//      For example, if “abc” and 4 are given values, the function prints out abcabcabcabc.
"use strict"
var string = "abc";
var string2 = "";
var a = 4;

function concat() {
    for (var i = 0; i < a; i++) {
        string2 += string;
    }
    console.log(string2);
}
concat(string);