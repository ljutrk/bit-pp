// 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
//    Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
//    Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
"use strict"

function arraySwitchMinMax(inputArray) {
    var minimumElement = 0;
    var maximumElement = 0;

    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[maximumElement] < inputArray[i]) {
            maximumElement = i;
        }
        if (inputArray[i] < inputArray[minimumElement]) {
            minimumElement = i;
        }
    }

    var oldValue;
    oldValue = inputArray[minimumElement];
    inputArray[minimumElement] = inputArray[maximumElement];
    inputArray[maximumElement] = oldValue;

    return inputArray;
}

console.log(arraySwitchMinMax([3, 500, 12, 149, 53, 414, 1, 19]));