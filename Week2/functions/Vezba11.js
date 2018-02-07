// 11. Write a function that concatenates a given string given number of times.
//     For example, if “abc” and 4 are given values, the function prints out abcabcabcabc. 

function stringConcatenate(word, number) {
    var concatenate = "";
    for (let i = 0; i < number; i++) {
        concatenate += word;
    }
    return concatenate;
}

console.log(stringConcatenate("Ljuba", 5));
