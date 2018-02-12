// 8. Write a function that calculates a number of appearances of a given number in a given array.
"use strict"
function howManyNumbersInArray(a, arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a) {
            sum += 1;
        }
    }
    return sum;
}

console.log(howManyNumbersInArray(5, [1, 1, 3, 4, 5, 5, 1]));

