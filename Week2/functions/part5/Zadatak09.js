// 9. Write a function to find the median element of array.

"use strict"

function medianElementOfArray(arr) {
    var medianNumber;
    var odd = (arr.length - 1) / 2;

    medianNumber = arr[odd];
    return medianNumber;
}

//console.log(medianElementOfArray([1, 2, 3, 4, 5, 6, 7, 3, 7, 10, 1, 4]));     //12 - even
console.log(medianElementOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));  //13 - odd