// 10. Write a function that calculates the number of appearances of a letter a in a given string.
//      Modify the function so it calculates the number of both letters a and A.

var string = "anAnas";
var result = 0;

function str() {
    for (i = 0; i <= string.length; i++) {
        if (string[i] === "a" || string[i] === "A") {
            result += 1;
        }
    }
    console.log(result);
}
str(string);