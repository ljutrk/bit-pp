// 3. Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function minimumNumberInArray(arr) {
   var result; 
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
        
        if (arr[i] < arr[i+1]) {
            result = arr[i];
        }
    }
    
    
    return result;
}

console.log(minimumNumberInArray([4, 2, 2, -1, 6]));
