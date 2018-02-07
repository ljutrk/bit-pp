//8. Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function primeCheck(num) {
    if (num >= 1 && num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(primeCheck(74));

