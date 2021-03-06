// 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
//     Starvation: less than 15
//     Anorexic: less than 17.5
//     Underweight: less than 18.5
//     Ideal: greater than or equal to 18.5 but less than 25
//     Overweight: greater than or equal to 25 but less than 30
//     Obese: greater than or equal to 30 but less than 40
//     Morbidly obese: greater than or equal to 40


"use strict"

function BMI(weight, height) {
    var sqHeight = height * height;
    var index = weight / sqHeight;
    var result = "";

    if (index < 15) {
        result += "Starvation";
    } else if (index < 17.5) {
        result += "Anorexic";
    } else if (index < 18.5) {
        result += "Underweight";
    } else if (index >= 18.5 && index < 25) {
        result += "Ideal!";
    } else if (index >= 25 && index < 30) {
        result += "Overweight!";
    } else if (index >= 30 && index < 40) {
        result += "Obese!";
    } else if (index >= 40) {
        result += "Morbidly obese!";
    }
    return result;
}

console.log(BMI(106, 1.88));
