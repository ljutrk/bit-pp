//var arr = [1, 2, undefined, undefined, 3, 4];
//delete arr[2];
var a = ["1", "21", undefined, "42", "1e+3", Infinity]
for (let i = 0; i < a.length; i++) {
    if (typeof a[i] !== "number") {
        delete a[i];
    }
}
console.log(a);
