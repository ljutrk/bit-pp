// 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
//    Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
//    Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
"use strict"

function createNewArray(inputArray) {

    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 0) {
            inputArray[i] = 20;
        }
        inputArray[i] = inputArray[i] / 2 + 5;
    }
    return inputArray;
}

console.log(createNewArray([3, 500, -10, 149, 53, 414, 1, 19, 0]));