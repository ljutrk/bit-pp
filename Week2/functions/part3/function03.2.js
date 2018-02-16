// 3. Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function falsyFilter(initialArray) {
    var finalArray = [];
    var counter = 0;    
        for (let i = 0; i < initialArray.length; i++) {
            if (isFinite(initialArray[i]) === true && initialArray[i] !== false && initialArray[i] !== null && !!initialArray[i] !== false) {
                finalArray[counter] = initialArray[i];
                counter += 1;
            }
        }
        return finalArray;
    }
    console.log(falsyFilter([NaN, 0, 15, false, -22, '', undefined, 47, null]));
