// 3. Write a function that rotates a list by k elements.
//    For example[1, 2, 3, 4, 5, 6] rotated by two becomes[3, 4, 5, 6, 1, 2]

"use strict"

function arrRotation(arr, num) {
    var newArray = [];
    var counter = 0;

    for (let i = num; i < arr.length; i++) {
        newArray[counter] = arr[i];
        counter++;
    }
    counter -= 1;
    for (let j = 0; j < num; j++) {
        counter++;
        newArray[counter] = arr[j];
    }
    return newArray;
}

console.log(arrRotation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
