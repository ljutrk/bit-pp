// 2. Write a function that checks if a given number is odd.

function odd(x) {

    if (x % 2 !== 0) {
        return x;
    } else {
        return x + ", even number!";
    }
}
console.log(odd(34));

