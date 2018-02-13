// 8. Write a function to find the maximum and minimum elements. Function returns an array.

"use strict"

function maxAndMinElements(arr) {
    var finalArray = [];
    var max = arr[0];
    var min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    finalArray[0] = max;
    finalArray[1] = min;
    return finalArray;
}

console.log(maxAndMinElements([1, 2, 3, 4, 5, 6, 7, 3, 7, 10, 1, 4]));
