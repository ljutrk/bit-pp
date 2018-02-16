// Write a program that finds the second largest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 4

function secondLargest(arr) {
    var largest = 0;
    var secondLargest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i]
        }

    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > secondLargest && arr[j] !== largest) {
            secondLargest = arr[j];
        }
    }

    return largest;
}

console.log(secondLargest([4, 2, 2, -1, 6]));
