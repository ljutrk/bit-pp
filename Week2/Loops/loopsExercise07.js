var arr = [80, 77, 88, 95, 68];
var sum = 0;
var avg = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];

}
avg = sum / arr.length;
console.log(avg);
if (avg < 60) {
    console.log("F");
} else if (avg < 70) {
    console.log("D");
} else if (avg < 80) {
    console.log("C");
} else if (avg < 90){
    console.log("B");
} else if (avg < 100){
    console.log("A");
} else {
    console.log("You failed the test!");
}

