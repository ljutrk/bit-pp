// 1. Write a function to check whether the `input` is a string or not.

//     "My random string" -> true
//     12 -> false

function isString(a) {
    if (typeof a === "string") {
        return true;
    } else {
        return false;
    }
}
console.log(isString(76));
