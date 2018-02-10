// 4. Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

function reverseNumber(number) {

    var arr = [];
    var str = "";
    str += number;
    var str2 = "";
    var strFinal;

    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }

    for (let i = 0, j = arr.length-1; i < arr.length, j >= 0; i++, j--) {
        str2 += arr[j];
    }

    strFinal = parseInt(str2);
    console.log(typeof strFinal);
    
    return strFinal;
}
console.log(reverseNumber(12345));
