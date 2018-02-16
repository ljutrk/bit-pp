// 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function elementJoin(arr) {
    var counter = 0;
    var arr2 = [];
    var str;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" || typeof arr[i] === "number") {
            arr2[counter] = arr[i];
            counter++;
            for (let i = 0; i < arr2.length; i++) {
                str += arr2[i];
            }

        }
    }
    return str;
}


console.log(elementJoin([NaN, 0, 15, false, -22, '', undefined, 47, null]));
