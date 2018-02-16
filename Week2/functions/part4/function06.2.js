// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

function isArraySymmetric(arr) {
    var counter = 0;
    var result;
    var duzinaj = arr.length - counter;
    var duzinai = 0 + counter;

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length; j < 0; j--) {
            if (arr[duzinai] === arr[duzinaj]) {
                counter++;
                result += 1;
            }
        }
    }
    // for (let i = 0, j = arr.length; i < arr.length, j >= 0; i++ , j--) {
    //     console.log(i, j);


    //     if (arr[i] === arr[j]) {
    //         counter++;

    //     }
    // }
    // console.log(counter);

    // if (counter = duzina - 1) {
    //     result = "true!";
    // } else {
    //     result = "false!";
    // }

    
    return counter;
}

console.log(isArraySymmetric([2, 4, -2, 7, -2, 4, 2, 10]));
