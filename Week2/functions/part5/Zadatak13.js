// 13. Write a function to find all the numbers greater than the average.

"use strict"

function greaterThanAverageNumbers(arr) {
    var avg = 0;
    var newArray = [];
    var counter = 0;
    var result = "";

    for (let i = 0; i < arr.length; i++) {
        avg += arr[i];
    }
    avg = avg / arr.length;
    for (let j = 0; j < arr.length; j++) {
        if (avg < arr[j]) {
            newArray[counter] = arr[j];
            counter++;
        }
    }
    return newArray;
}

console.log(greaterThanAverageNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 15]));
