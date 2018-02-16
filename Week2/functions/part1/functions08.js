// 8. Write a function that calculates a number of appearances of a given number in a given array.
"use strict"
var a = [1, 3, 5, 6, 1, 1, 3];
var result = 0;

function rep(x) {
    for (var i = 0; i <= 7; i++) {
        if (a[i] === x) {
            result += 1;
        }
    }
    console.log(result);
}
rep(1);