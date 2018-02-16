// 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
//    51-60 -> 6,
//    61-70 -> 7,
//    71-80 -> 8,
//    81-90 -> 9,
//    91-100 -> 10.
//    Input : [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
//    Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
"use strict"

function studentGradeAndName(inputArrayNames, inputArrayMarks) {
    var result = "";

    for (var i = 0; i < inputArrayMarks.length; i++) {
        var mark = (inputArrayMarks[i] - 1) % 10 + 1;
        if (inputArrayMarks[i] > 51) {
            result += inputArrayNames[i] + " acquired " + inputArrayMarks[i] + " points and earned " + mark + "\n";
        }
        else {
            result += inputArrayNames[i] + " acquired " + inputArrayMarks[i] + " points and failed to pass the exam\n";
        }
    }
    return result;
}

console.log(studentGradeAndName(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));
