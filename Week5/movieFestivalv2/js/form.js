"use strict";

function Genre(name) {
    this.name = name;

}

Genre.prototype.getData = function () {
    var firstLetter = this.name.charAt(0);
    var lastLetter = this.name.charAt(this.name.length - 1);
    var result = firstLetter + lastLetter;
    return result.toUpperCase();
}

function Movie(title, genreObject, length) {
    this.title = title;
    this.genreObject = genreObject;
    this.length = parseInt(length);


}
Movie.prototype.getData = function () {
    return this.title + ", " + this.genreObject.getData() + ", " + this.length + "min.";
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];


}
Program.prototype.getData = function () {
    var totalTime = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        totalTime += this.listOfMovies[i].length;
    }
    var firstRow = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", program duration " + totalTime + "min";

    return firstRow;
}

// Program.prototype.addMovie = function (movie) {
//     this.listOfMovies.push(movie);
//     this.totalNumMovies++;
// }

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numOfMovies = 0;


}

Festival.prototype.addProgram = function (program) {
    this.listOfPrograms.push(program);
    this.numOfMovies += program.totalNumMovies;
}

// Festival.prototype.addMovie = function (movie) {
//     this.listOfPrograms
// }

Festival.prototype.getData = function () {
    var result = "";
    for (var i = 0; i < this.listOfPrograms.length; i++) {
        result += "\t" + this.listOfPrograms[i].getData();
    }
    var firstLine = this.name + " has " + this.numOfMovies + " movies\n";
    result = firstLine + result;

    return result;
}

function createMovie(title, length, genre) {
    var genreObject = new Genre(genre);

    return new Movie(title, genreObject, length);
}

function createProgram(date) {
    return new Program(date);
}

var myFestival = new Festival("My Movie Festival");


var createMovieButton = document.querySelector("#submitNewMovie");
var createProgramButton = document.querySelector("#submitNewProgram");
var addMovieToProgramButton = document.querySelector("#submitMovieToProgram");

createMovieButton.addEventListener("click", function (event) {
    gatherData();
});
createProgramButton.addEventListener("click", function (event) {
    gatherData2();
});
addMovieToProgramButton.addEventListener("click", function (event) {
    gatherData3();
});

var movieList = [];
var movieLength = 0;
var movieCounter = 0;
var programCounter = 0;

// ----------------------------------------------------------------------

function gatherData() {
    var titleElement = document.querySelector("#movie-title");
    var title = titleElement.value;
    var lengthElement = document.querySelector("#movie-length");
    var length = lengthElement.value;
    var genreElement = document.querySelector("#genre-select");
    var genre = genreElement.value;

    var movie = createMovie(title, length, genre);

    if (!movie.title || !movie.length || genre === "none") {
        showError(movie);
        return;
    }

    movieList.push(movie);
    printMovie(movie);
    addMovieToDropdown(movie);
    movieCounter++;
    changeTotalTime(totalMovieLength(movieList, movieLength));

    titleElement.value = "";
    lengthElement.value = "";
    genreElement.selectedIndex = 0;
}

// ----------------------------------------------------------------------

function printMovie(movie) {
    var movieDiv = document.querySelector(".newMovieContainer");
    var p = document.createElement("p");
    p.textContent = movie.getData();
    movieDiv.appendChild(p);
}

function totalMovieLength(movieList, movieLength) {

    movieList.forEach(function (element) {
        movieLength += element.length;
    })
    return movieLength;
}

function changeTotalTime(totalMovieLength) {
    var span = document.querySelector(".totalTime");
    span.textContent = totalMovieLength;
}

function showError(input) {
    var errorMsg = 'Unknown error!';

    if (!input.title) {
        errorMsg = "Enter title!";
    } else if (!input.length) {
        errorMsg = "Enter length!";
    } else if (input.genreObject.name === "none") {
        errorMsg = "Select genre!";
    }

    document.querySelector(".error").textContent = errorMsg;
}

function addMovieToDropdown(movie) {
    var dropdown = document.querySelector("#movie-select");
    var option = document.createElement("option");
    option.textContent = movie.getData();
    option.value = movieCounter;
    dropdown.appendChild(option);
}

// ----------------------------------------------------------------------

function gatherData2() {
    var dateElement = document.querySelector("#program-date");
    var date = dateElement.value;

    var program = createProgram(date);
    myFestival.addProgram(program);
    printProgram(program);
    addProgramToDropdown(program)
    programCounter++;

    dateElement.value = "";
}

// ----------------------------------------------------------------------

function printProgram(program) {
    var programDiv = document.querySelector(".newProgramContainer");
    var p = document.createElement("p");
    p.textContent = program.getData();
    programDiv.appendChild(p);
}

function addProgramToDropdown(program) {
    var dropdown = document.querySelector("#program-select");
    var option = document.createElement("option");
    option.textContent = program.getData();
    option.value = programCounter;
    dropdown.appendChild(option);
}

// ----------------------------------------------------------------------

function gatherData3() {
    var programOption = document.querySelector("#program-select")
    var movieOption = document.querySelector("#movie-select")
    var movie = movieList[movieOption.value];
    var program = myFestival.listOfPrograms[programOption.value].listOfMovies;
    var refresh = myFestival.listOfPrograms[programOption.value]
    program.push(movie);

    programListRefresh(refresh);
    programOption.selectedIndex = 0;
    movieOption.selectedIndex = 0;
}

// ----------------------------------------------------------------------

function programListRefresh(program) {
    var programDiv = document.querySelector(".newProgramContainer");
    var oldP = programDiv.firstElementChild;
    var p = document.createElement("p");
    p.textContent = program.getData();
    programDiv.replaceChild(p,oldP);
}


