// 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function stringInsert(str, str2, position ) {
    var arr = [];
    var counter = 0;
    var result;
    for (let i = 0; i < str.length; i++) {
        arr[counter] = str[i];
        arr[position] = str2;
        if(counter === position){
            
        }
        counter += 1;
    }
    return arr;
}

console.log(stringInsert("My random string", "JS", 5));

