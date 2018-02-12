// 9. Write a function that calculates the sum of odd elements of a given array.
"use strict"
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var result = 0;

function sum() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result += arr[i];
        }
    }
    console.log(result);
}
sum(arr);