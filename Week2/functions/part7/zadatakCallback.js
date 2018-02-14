/**
   * Take a look at this common scenario–you have a function that returns a value,
   * which you then pass to another function. In our example, the first function,
   * multiplyByTwo(), loops through passed input array, multiplies each element
   * by two, and returns an array containing the result. The second function,
   * addOne(), takes a value, adds one to it, and returns it
  */
 "use strict";

function multiplyByTwo(inputArray, add) {
    var newArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        newArray[i] = add(element * 2);
    }
    return newArray;
}

function addOne(a) {
    return a + 1;
}
var inputTwo = [10, 20, 30];

var myarr = multiplyByTwo(inputTwo, addOne);
var plusFive = multiplyByTwo(inputTwo, function (param) {
    return param + 5;
});
console.log(plusFive);