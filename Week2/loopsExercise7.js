var arr = [80, 77, 88, 95, 68];
var sum = 0;
var avg = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];

}
avg = sum / arr.length;
if (avg < 60) {
    console.log("F");
} else {
    console.log("You failed the test!");
}

    
}