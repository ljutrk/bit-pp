// 11.  Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
"use strict"

function convertArrToSrt(arr){
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
       if(typeof (arr[i]) !== "string") {
            newArr[i] = arr[i];
       }
    }
    return newArr;
}

console.log(convertArrToSrt(["21", "2", undefined, NaN]));