// 10. Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function mostFrequent(arr) {
    var arr2 = [];
    var counter = 0;
    for (let i = 0; i < arr.length; i++) {
       // for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr2[counter] = arr[i];
                arr3[counter] = 
                counter++;    
            }
            
       // }
    }
    return;
}

console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
