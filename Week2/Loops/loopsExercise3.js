var arr = [2, 2, 3, 10, 65, 45, 23, 11];
var sum = 0;
var mult = 1;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    mult *= arr[i];
}
console.log(sum);
console.log(mult);