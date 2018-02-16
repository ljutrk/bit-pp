// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

"use strict"

function celsiusToFarenheit(celsius) {
    var farenheit;

    farenheit = celsius * 9 / 5 + 32;
    return farenheit;
}

console.log(celsiusToFarenheit(27));