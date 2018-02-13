// 7. Write a function to find the maximum element in array of numbers.Filter out all non - number elements.

"use strict"

function maximumElementInArray(arr) {
    var max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }
    return max;
}

console.log(maximumElementInArray([1, 2, 3, 4, "z", "f", 5, 6, 10, 9]));