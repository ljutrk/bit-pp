function num(x) {
    if (x > 99 && x < 1000) {
        return x + " is 3 digit number!";
    } else {
        return x + " is not a 3 digit number!";
    }
}

console.log(num(1230));