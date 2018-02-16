// 4. Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
//    Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
//    Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
"use strict"

function sortArrayAscendingMultiply2(inputArray) {

    for (var i = 0; i < inputArray.length; i++) {
        for (var j = 0; j < inputArray.length - i; j++) {
            if (inputArray[j] > inputArray[j + 1]) {
                var oldValue = inputArray[j];
                if (i == 0) {
                    inputArray[j] = inputArray[j + 1] * 2;
                } else {
                    inputArray[j] = inputArray[j + 1];
                }
                inputArray[j + 1] = oldValue;
            }
        }
    }
    return inputArray;
}

console.log(sortArrayAscendingMultiply2([13, 11, 15, 5, 6, 1, 8, 12]));