// 1. Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

function elementPresent(arr, ele) {
    var result
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return "Yes!";
        } else {
            
        }
        
    }
    return "No!";
}

console.log(elementPresent([5, -4.2, 3, 7], 7));
