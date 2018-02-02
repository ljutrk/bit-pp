var a = 25;
var result = "";
var digit;

if (typeof a === "number") {
    if (a / 10 >= 1 && a / 10 < 10) {
        digit = a % 10;
        result += digit;
        digit = (a - digit) / 10;
        result += digit;
        console.log(result);
    } else {
        console.log("The number does not have two digits! ")
    }
} else {
    console.log("ERROR!");
}