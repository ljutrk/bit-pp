"use strict"
function Person(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.age = function () {
        var date = new Date()
        return date.getFullYear() - yearOfBirth;
    };
    this.getInfo = function() {
        return this.name + " " + this.yearOfBirth + " " + this.age();
    }
}

var maja = new Person("Maja", 1989);
var ljubomir = new Person("Ljubomir", 1988);

// console.log(maja);
// console.log(maja.age());

// console.log(ljubomir);
// console.log(ljubomir.age());

// var dateNow = new Date().toLocaleTimeString();
// console.log(dateNow);
// console.log(typeof dateNow);

console.log(ljubomir);