// 6. Write a function that draws a horizontal chart representing three given values.
// For example, if values are 5, 3, and 7, the function should draw:
// * * * * *
// * * *
// * * * * * * *

function chart(a, b, c) {
    var concatinate = "";
    for (let i = 0; i < a; i++) {
        concatinate += "*";
    }
    concatinate += "\n";
    for (let i = 0; i < b; i++) {
        concatinate += "*";
    }
    concatinate += "\n";
    for (let i = 0; i < c; i++) {
        concatinate += "*";
    }
    return concatinate;
}

console.log(chart(5, 3, 7));

