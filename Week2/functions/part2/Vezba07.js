// 7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

//     "My random string" -> ["M", "y", null, "r", "a"]
//     "Random" -> ["R", "a", "n", "d", "o", "m"]
"use strict"
function strToArr(str){
    var arr = [];
    for (let i = 0; i < str.length; i++) {
        if(str[i] === " "){
            arr[i] = "null";
        } else {
        arr[i] = str[i];
        }
    }
    return arr;
}

console.log(strToArr("Matija Ljuba"));
