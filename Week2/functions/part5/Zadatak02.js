"use strict"

function arrAltCombining(arr, arr2) {
    var finalArr = [];
    var newIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        finalArr[newIndex] = arr[i];
        newIndex += 2
    }
    newIndex = 0;
    for (let i = 0; i < arr2.length; i++) {
        finalArr[newIndex + 1] = arr2[i];
        newIndex += 2
    }

    return finalArr;
}

console.log(arrAltCombining(['a', 'b', 'c'], [1, 2, 3]));