// 5. Write a function that draws a square of a given size. For example,  if the size of square is 5 the function
//      should draw: 
//     *****
//     *   *
//     *   *
//     *   *
//     *****

var row = "";
var col = "";
var q = " ";

function sqr(x) {
    for (var i = 0; i < x; i++) {
        row += "*";
    }
    console.log(row);
    for (i = 0; i < x - 2; i++) {
        col = "*";
        for (j = 0; j < x - 2; j++) {
            col += q;
        }
        col += "*";
        console.log(col);
    }
    console.log(row);
}
sqr(10);