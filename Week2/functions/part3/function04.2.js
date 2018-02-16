// 4. Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

function numberReverse(num) {
    var numberToString = "";
    var finalString = "";
    var finalNumber = 0;
    numberToString = num + "";

    for (var i = numberToString.length - 1; i >= 0; i--) {
        finalString += numberToString[i];
    }
    finalNumber = parseInt(finalString)
    console.log(typeof finalNumber);

    return finalNumber;
}
console.log(numberReverse(12345));
