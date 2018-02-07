// 3. Write a function that checks if a given number is a three digit long number.

function threeDigit(num) {
    if (num > 99 && num < 1000) {
        return true;
    } else {
        return false;
    }
}

console.log(threeDigit(4533));

