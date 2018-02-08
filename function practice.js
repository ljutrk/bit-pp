// function twoNumMax(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else if (num2 > num1) {
//         return num2;
//     } else {
//         var num3 = "Numbers are same!"
//         return num3;
//     }
// }

// console.log(twoNumMax(10,1));

// function ifNumIsOdd(num) {
//     if (num % 2 !== 0) {
//         var result = num + " , the number is odd!"
//         return result;
//     } else {
//         var result2 = num + " , the number is even!"
//         return result2;
//     }
// }

// console.log(ifNumIsOdd(11));

// function threeDigitCheck(num) {
//     if (num > 99 && num < 1000) {
//         var result = num + " , The number has three digits!"
//         return result;
//     } else {
//         var result2 = num + " , the number does not have three digits!"
//         return result2;
//     }
// }

// console.log(threeDigitCheck(4530));

// function arithmeticMean(num1, num2, num3, num4) {
//     var result = (num1 + num2 + num3 + num4) / 4;
//     return result;
// }
// console.log(arithmeticMean(10, 15, 15, 20));

// function drawSquare(num) {
//     var result = "";
//     for (let i = 0; i < num; i++) {
//         result += "*";

//     }
//     result += "\n";
//     for (let i = 0; i < num - 2; i++) {
//         result += "*";
//         for (let j = 0; j < num - 2; j++) {
//             result += " ";
//         }
//         result += "*";
//         result += "\n";
//     }
//     for (let i = 0; i < num; i++) {
//         result += "*";
//     }
//     return result;
// }

// console.log(drawSquare(5));

// function chart(num1, num2, num3) {
//     var result = "";
//     for (let i = 0; i < num1; i++) {
//         result += "*";
//     }
//     result += "\n";
//     for (let i = 0; i < num2; i++) {
//         result += "*";
//     }
//     result += "\n";
//     for (let i = 0; i < num3; i++) {
//         result += "*";
//     }
//     return result;
// }

// console.log(chart(5, 3, 7));

// function digitNumber(num) {
//     num = num + "";
//     return num.length;
// }

// console.log(digitNumber(100056789));

// function digitAppearancesInArr(arr, num) {
//     var result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             result += 1
//         }
//     }
//     return result;
// }

// console.log(digitAppearancesInArr([1, 2, 1, 1, 3, 4, 4], 4));

// function sumOfOddElements(arr) {
//     var result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             result += arr[i];
//         }
//     }
//     return result;
// }

// console.log(sumOfOddElements([1, 2, 3, 4, 5, 6]));

// function numberOfLetterAppearancesInArr(str) {
//     var result = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "A") {
//             result += 1;
//         }
//     }
//     return result;
// }

// console.log(numberOfLetterAppearancesInArr("LaborAtorija"));

// function stringConcat(str, num) {
//     var result = "";
//     for (let i = 0; i < str.length; i++) {
//         result += str;
//     }
//     return result;
// }

// console.log(stringConcat("bla"));

/*-------------------------------------------------------------------------------------------------------*/

// function stringOrNot(str) {
//     result = "";
//     if (typeof str === "string") {
//         result += "True!"
//     } else {
//         result += "False!"
//     }
//     return result;
// }

// console.log(stringOrNot("My random string"));
// console.log(stringOrNot(12));

// function isStringBlank(str) {
//     var result = "";
//     if (str === "") { 
//         result += "True!"
//     } else {
//         result += "False!"
//     }
//     return result;
// }

// //console.log(isStringBlank("lab"));
// //console.log(isStringBlank(""));
// //console.log(isStringBlank(12));
// console.log(isStringBlank(false));

// function stringHaHaConcat(str, num) {
//     var result = "";
//     for (let i = 0; i < num; i++) {
//         result += str;
//     }
//     return result;
// }

// console.log((stringHaHaConcat("Ha", 3)));

// function numOfLetterOccurrenceInStr(str, letter) {
//     var result = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             result += 1;
//         }
//     }
//     return result;
// }

// console.log(numOfLetterOccurrenceInStr("My random string", "n"));

// function firstOccurance(str, letter) {
//     var result = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             result = i + 1;
//             break;
//         }
//     }
//     if (result === 0) {
//         result = -1;
//     }
//         return result;
// }

// console.log(firstOccurance("laboratorija", "a"));
// //console.log(firstOccurance("laboratorija", "q"));

// function lastOccurance(str, letter) {
//     var result = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             result = i + 1;
//         }
//     }
//     if (result === 0) {
//         result = -1;
//     } else {
//         result;
//     }
//         return result;
// }

// console.log(lastOccurance("laboratorija", "o"));
// console.log(lastOccurance("laboratorija", "a"));
// console.log(lastOccurance("laboratorija", "q"));

// function strToArr(str) {
//     var arr = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             arr[i] = null;
//         } else {
//             arr[i] = str[i];
//         }
//     }
//     return arr;
// }
// console.log(strToArr("My random string"));
// console.log(strToArr("Random"));

// function primeCheck(num) {
//     var result = "";
//     if (num > 1 && num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(primeCheck(11));
// console.log(primeCheck(12));
// console.log(primeCheck(13));
// console.log(primeCheck(14));
// console.log(primeCheck(15));

// function spaceReplace(str1, str2) {
//     var arr = [];
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] !== " ") {
//             arr[i] = str1[i];
//         } else if (str1[i] === " ") {
//             arr[i] = str2;
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === undefined) {
//             arr[i] = "-";
//         }
//     }
//     return arr;
// }

// console.log(spaceReplace("My random string", "_"));
// console.log(spaceReplace("My random string", "+"));
// console.log(spaceReplace("My random string"));

// function firstNChars(str, num) {
//     var result = "";
//     for (let i = 0; i < num; i++) {
//         result += str[i]
//     }
//     result += "..."
//     return result;
// }

// console.log(firstNChars("laboratory", 6));

// function arrStrToArrNum(arr) {
//     var result = [];
//     var counter = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "string") {
//             result[counter] = parseFloat(arr[i]);
//             counter++;
//         }
//     }
//     return result;
// }

// console.log(arrStrToArrNum(["1", "21", undefined, "42", "1e+3", Infinity]));

// function yearsUntilRetirement(yearOfBirth, gender) {
//     var age = 2018 - yearOfBirth;
//     var result;
//     if (gender === "M" || gender === "m" && age < 65) {
//         result = 65 - age;
//     } else if (gender === "M" || gender === "m" && age > 65) {
//         result = "You are already retied!";
//     } else if (gender === "F" || gender === "f" && age < 60) {
//         result = 60 - age;
//     } else if (gender === "F" || gender === "f" && age > 60) {
//         result = "You are already retied!";
//     }
//     return result;
// }

// console.log(yearsUntilRetirement(1988, "m"));

// function yearsUntilRetirement(yearOfBirth, gender) {
//     var age = 2018 - yearOfBirth;
//     var result;

//     if (gender === "M" || gender === "m") {
//         if (age < 65 && age !== 0) {
//             result = 65 - age;
//         } else {
//             result = "You are already retired!";
//         }
//     }
//     if (gender === "F" || gender === "f") {
//         if (age < 60 && age !== 0) {
//             result = 60 - age;
//         } else {
//             result = "You are already retired!";
//         }
//     }
//     return result;
// }
// console.log(yearsUntilRetirement(1988, "m"));

// function numHum(num) {
//     var result = "";
//     if (num % 100 >= 11 && num % 100 <= 13) {
//         result = num + "th";
//     } else if (num % 10 === 1) {
//         result = num + "st";
//     } else if (num % 10 === 2) {
//         result = num + "nd";
//     } else if (num % 10 === 3) {
//         result = num + "rd";
//     } else {
//         result = num + "th";
//     }
//     return result;
// }

// console.log(numHum(33322));







