// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
//    Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

//    Output: AnStJoJoDaMa
"use strict"

var inputArray = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]
var result = "";

for (var i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] === "string") {
        if (inputArray[i].length >= 2) {
            result += (inputArray[i][0] + inputArray[i][1]);
            //result += inputArray[i].substring(0,2);
        }
    }
}

console.log(result);
