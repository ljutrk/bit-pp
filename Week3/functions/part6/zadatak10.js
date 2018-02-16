// 10. Write a function to find the element that occurs most frequently.

"use strict"

function mostFrequentElement(arr) {
    var freqEle = 0;
    var counter;
    var countermax = 1;

    for (let i = 0; i < arr.length; i++) {
        counter = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            } else if (arr[i] !== freqEle && counter > countermax) {
                countermax = counter;
                freqEle = arr[i];
            }
        }
    }
    return freqEle;
}

console.log(mostFrequentElement([1, 2, 3, 4, 5, 1, 1, 2, 2, 3, 1])); //4 x 1