// 12. Write a function to find the average of N elements.
//     Make the function flexible to receive dynamic number or parameters.

"use strict"

function averageOfSomeElements(arr, e1, e2, e3) {
    var avg = (arr[e1] + arr[e2] + arr[e3]) / 3;

    return avg;
}

console.log(averageOfSomeElements([1, 2, 3, 4, 5, 6, 7], 2, 4, 6));