// 11. Write a function to find and return the first, middle and last element of an array
//     if the array has odd number of elements. If number of elements is even, return just the first and the last.
//     In other cases, input array should be returned.

"use strict"

function firstMidAndLast(arr) {
    var firstElement = arr[0];
    var medianElement = arr[(arr.length - 1) / 2]
    var lastElement = arr[arr.length - 1];
    var result = "";

    if (arr.length % 2 !== 0) {
        result = result + " " + firstElement + " " + medianElement + " " + lastElement;
    } else {
        result = result + " " + firstElement + " " + lastElement;
    }
    return result;
}

console.log(firstMidAndLast([1, 2, 3, 4, 5, 6, 7, 8, 9]));