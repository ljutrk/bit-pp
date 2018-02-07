// 6. Write a function that draws a horizontal chart representing three given values.
//      For example, if values are 5, 3, and 7, the function should draw:
//     * * * * *
//     * * *
//     * * * * * * *

var star1 = "";
var star2 = "";
var star3 = "";

function chart(a, b, c) {
    for (i = 0; i < a; i++) {
        star1 += "*";
    }
    console.log(star1);
    for (i = 0; i < b; i++) {
        star2 += "*";
    }
    console.log(star2);
    for (i = 0; i < c; i++) {
        star3 += "*";
    }
    console.log(star3);
}

chart(5, 3, 7);