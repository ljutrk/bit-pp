// 5. Write a program that prints a multiplication table for numbers up to 12.

"use strict"

function multiplicationTable(num) {
    var multiplicationTable = "";

    for (let i = 1; i <= num; i++) {
        multiplicationTable += "\n";
        for (let j = 1; j <= num; j++) {
            multiplicationTable = multiplicationTable + "     " + i * j;
        }
    }
    return multiplicationTable;
}

console.log(multiplicationTable(12));