// 10. Write a function that calculates the number of appearances of a letter a in a given string.
//     Modify the function so it calculates the number of both letters a and A.

function howManyLetters(word, letter) {
    var sum = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter || word[i] === letter.toUpperCase()) {
            sum += 1;
        }
    }
    return sum;
}

console.log(howManyLetters("matijA", "a"));




