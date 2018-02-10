// 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"



function strInoStr(str1, str2, position) {
    var result = "";
    if (position === undefined) {
        result = str2 + str1;
    } else {
    for (let i = 0; i < position; i++) {
            result += str1[i];   
        } 
        result += str2;
        
        for (let j = position; j < str1.length; j++) {
            result += str1[j];
        }
    
    // for (let j = position; j < str1.length; j++) {
    //     result += str1[j];
        

    return result;
    }
}

console.log(strInoStr("My random string", "JS ", 14));
