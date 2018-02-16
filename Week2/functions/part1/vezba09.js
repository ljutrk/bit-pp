// 9. Write a function that calculates the sum of odd elements of a given array. 
"use strict"
function sumOffOddNumbers(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumOffOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
