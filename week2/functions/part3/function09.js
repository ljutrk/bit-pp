// 9. Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

function findWord(address) {
    var str = "";
    var str2 = "";
    var str3 = "";
    var str4 = "";
    var counter;

    for (let i = 0; i < address.length; i++) {
        if (address[i] === "@") {
            counter = i;
            break;
        }
        str += address[i];
    }
    for (let i = 0; i < str.length / 2; i++) {
        str2 += str[i];
    }
    str3 = str2 + "..."
    for (let i = counter; i < address.length; i++) {
        str4 += address[i];
    }
    return str3 + str4;
}

console.log(findWord("myemailaddress@bgit.rs"));