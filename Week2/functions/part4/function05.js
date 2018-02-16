// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function sumOfPositives(array) {
    var result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result += array[i];
        }
    }
    return result;
}

console.log(sumOfPositives([3, 11, -5, -3, 2]));
