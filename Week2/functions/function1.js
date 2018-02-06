function sum(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else if (a = b) {
        return "a and b are equal!"
    }
}

console.log(sum(5, 5));