"use strict";

const {
    createMovie
} = require('./movieModule.js');
const {
    createGenre
} = require('./genreModule.js');
const {
    createProgram
} = require('./programModule.js');
const {
    createFestival
} = require('./festivalModule.js');

var myFestival = createFestival("My Movie Festival");

var prog1 = createProgram(new Date("2 20 2019"));
var prog2 = createProgram(new Date(2018, 2, 20));

var mov1 = createMovie("The Shawshank Redemption", 142, "Drama");
var mov2 = createMovie("The Green Mile", 189, "Fantasy");
var mov3 = createMovie("Gladiator", 175, "Action");
var mov4 = createMovie("The Bourne Identity", 119, "Thriller");
var mov5 = createMovie("King Arthur", 126, "Adventure");
var mov6 = createMovie("Predestination", 143, "Mystery");
var mov7 = createMovie("Easy A", 92, "Comedy");
var mov8 = createMovie("Pirates Of the Caribbean", 143, "Adventure");

prog1.addMovie(mov1);
prog1.addMovie(mov2);
prog1.addMovie(mov3);
prog1.addMovie(mov4);

prog2.addMovie(mov5);
prog2.addMovie(mov6);
prog2.addMovie(mov7);
prog2.addMovie(mov8);

myFestival.addProgram(prog1);
myFestival.addProgram(prog2);
// console.log(mov1);

console.log(myFestival.getData());