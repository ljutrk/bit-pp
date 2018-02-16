// 2. Write a program to join all elements of the array into a string skipping elements
//  that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function noFalsyString(initialArray) {
    finalString = "";

    for (let i = 0; i < initialArray.length; i++) {
        if (typeof initialArray[i] === "number" && isFinite(initialArray[i]) === true) {
            finalString += initialArray[i];
        }
    }
    return finalString;
}
console.log(noFalsyString([NaN, 0, 15, false, -22, '', undefined, 47, null, Infinity]));
