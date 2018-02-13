// 2. Write a function that combines two arrays by alternatingly taking elements.
//    ['a', 'b', 'c'], [1, 2, 3] -> ['a', 1 ,'b', 2 ,'c', 3]

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