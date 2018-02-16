// 6. Write a program that checks if a given array is symmetric.
//  An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

function isArraySymmetric(arr) {
    var result = 0;
    duzina = arr.length;
    for (var i = 0; i < duzina; i++) {
        console.log(arr[i]);
        for (var j = duzina; 0 < duzina; j--) {
            console.log(arr[j]);
            }

        }

    return true;
}

console.log(isArraySymmetric([2, 4, -2, 7, -2, 4, 2]));
