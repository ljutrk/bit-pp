// 10.  Write a function to get the first n characters and add “...” at the end of newly created string.
"use strict"
function getFirstChar(str, n){
    var strNew = "";
    for (let i = 0; i < n; i++) {
        strNew += str[i];
    }
        strNew += "..."; 
    return strNew;
}

console.log(getFirstChar("Jovana", 3));
