//  5. Write a function that draws a square of a given size.
//     For example,  if the size of square is 5 the function should draw: 
//     *****
//     *   *
//     *   *
//     *   *
//     *****

function square(size) {
    var row = "";
    var col = "*";
    for (var i = 0; i < size; i++) {
        row += "*";
    }
    row += "\n";
    for (let i = 0; i < (size - 2); i++) {
        row += col;
        for (let i = 0; i < (size - 2); i++) {
            row += " ";
        }
        row += col;
        row += "\n";
    }
    for (var i = 0; i < size; i++) {
        row += "*";
    }
    return row;
}

console.log(square(7));