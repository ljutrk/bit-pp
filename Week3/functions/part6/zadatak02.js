// 2. Write a function that combines two arrays by alternatingly taking elements.
//    ['a', 'b', 'c'], [1, 2, 3] -> ['a', 1 ,'b', 2 ,'c', 3]

"use strict"

function arrAltCombining(arr, arr2) {
    var finalArr = [];
    var newIndex = 0;
    var longerArr = (arr.length > arr2.length) ? arr.length : arr2.length;

    // for (let i = 0; i < arr.length; i++) {
    //     finalArr[newIndex] = arr[i];
    //     newIndex += 2
    // }
    // newIndex = 0;
    // for (let i = 0; i < arr2.length; i++) {
    //     finalArr[newIndex + 1] = arr2[i];
    //     newIndex += 2
    // }

    for (let i = 0; i < longerArr; i++) {
        if (arr[i] !== undefined) {
            finalArr[newIndex] = arr[i];
            newIndex++;
        }
        if (arr2[i] !== undefined) {
            finalArr[newIndex] = arr2[i];
            newIndex++;
        }
    }

    return finalArr;
}

console.log(arrAltCombining(['a', 'b', 'c'], [1, 2, 3, 4, 5]));