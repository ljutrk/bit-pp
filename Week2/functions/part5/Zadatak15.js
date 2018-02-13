// 15. Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

"use strict"

function messageInRectangle(arr) {
    var result = "";
    
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 9; j++) {
            if (i === 0 || i === 6) {
                result += "*";
            } else if (i === 1) {
                result += "*" + " " + arr[0] + " " + "*";
                break;
            } else if (i === 2) {
                result += "*" + " " + arr[1] + " " + "*";
                break;
            } else if (i === 3) {
                result += "*" + " " + arr[2] + "    " + "*";
                break;
            } else if (i === 4) {
                result += "*" + " " + arr[3] + "     " + "*";
                break;
            } else if (i === 5) {
                result += "*" + " " + arr[4] + " " + "*";
                break;
            }
        }
        result += "\n";
    }
    return result;
}

console.log(messageInRectangle(["Hello", "World", "in", "a", "frame"]));
