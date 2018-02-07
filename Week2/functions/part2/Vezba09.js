// 9.  Write a function that replaces spaces in a string with provided separator.
//      If separator is not provided, use “-” (dash) as the default separator.

// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"


function strToArr(str, character){
    var arr = [];
    var sum = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i] === " " && character === "undefined"){
            arr[i] = "-";
        } else if(str[i] === " "){
            arr[i] = character;
        } else {
        arr[i] = str[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i]
    }

    return sum;
}

console.log(strToArr("Matija Ljuba"));

