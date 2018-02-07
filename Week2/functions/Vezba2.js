// 2. Write a function that checks if a given number is odd.

function isNumberOdd(num) {
    if (num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumberOdd(22));