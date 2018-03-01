"use strict";
var submitNewMovie = document.querySelector("#submitNewMovie");
var submitNewProgram = document.querySelector("#submitNewProgram");
var submitMovieToProgram = document.querySelector("#submitMovieToProgram");


var movieList = [];
var programList = [];
var totalMovieLength = 0;


function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = parseInt(length);
}

Movie.prototype.getData = function () {
    return this.title + ", duration: " + this.length + "min, genre: " + this.genreAbbreviation();
}

Movie.prototype.genreAbbreviation = function () {
    var firstLetter = this.genre.charAt(0);
    var lastLetter = this.genre.charAt(this.genre.length - 1);
    var result = firstLetter + lastLetter;
    return result.toUpperCase();
}

submitNewMovie.addEventListener("click", function (event) {
    createMovie();
})

function createMovie() {
    var title = document.querySelector("#movie-title").value;
    var genre = document.querySelector("#genre-select").value;
    var length = document.querySelector("#movie-length").value;

    var movie = new Movie(title, genre, length);

    if (!movie.title || !movie.length || movie.genre === "none") {
        showError(movie);
        return;
    }

    movieList.push(movie);
    totalTime(movieList);

    addTotalTime(totalMovieLength);
    addMovieToDiv(movieList);
    formReset();
}

function addMovieToDiv(movieArray) {
    var movieToDiv = document.querySelector(".newMovieContainer");
    var newParagraph = document.createElement("p");
    var movie = movieArray[movieArray.length - 1];
    newParagraph.textContent = movie.getData();
    movieToDiv.appendChild(newParagraph);

}

function totalTime(movArr) {
    var movieTime = 0;
    for (let i = 0; i < movArr.length; i++) {
        movieTime = movArr[i].length;
    }
    totalMovieLength += movieTime;
    return totalMovieLength;
}

function addTotalTime(totalMovieLength) {
    var totalTimeSpan = document.querySelector(".totalTime");
    var newTotalTimeSpan;
    var parent;
    if (totalTimeSpan) {
        parent = totalTimeSpan.parentNode;
        newTotalTimeSpan = document.createElement('span');
        newTotalTimeSpan.className = "totalTime";
        newTotalTimeSpan.textContent = totalMovieLength;
        parent.insertBefore(newTotalTimeSpan, totalTimeSpan);
        parent.removeChild(totalTimeSpan);
    }
}

function formReset() {
    document.querySelector(".form-movie").reset();
}

function showError(input) {
    var errorMsg = 'Unknown error!';

    if (!input.title) {
        errorMsg = "Enter title!"
    } else if (!input.length) {
        errorMsg = "Enter length!"
    } else if (input.genre === "none") {
        errorMsg = "Select genre!"
    }

    document.querySelector(".error").textContent = errorMsg;
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.totalNumMovies = 0;


}

Program.prototype.getData = function () {
    var result = "";
    var totalTime = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        totalTime += this.listOfMovies[i].length;
    }
    var programInfo = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", Number of movies: " + this.listOfMovies.length + ", duration: " + totalTime + "min";

    return programInfo;
}

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
    this.totalNumMovies++;
}

submitNewProgram.addEventListener("click", function (event) {
    createProgram();
})

function createProgram(date) {
    var date = document.querySelector("#program-date").value;
    var program = new Program(date);
    addMovieToProgram(program);
    addProgramToDropdown(program);
}

function addProgramToDropdown(program) {
    var programDropdown = document.querySelector("#program-select");
    var newOption = document.createElement("option");
    newOption.text = program.getData();
    programDropdown.add(newOption);
}

function addMovieToProgram(program) {
    var program = document.querySelector("#program-select").value;
    var movie = document.querySelector("#movie-select").value;
    // program.addMovie(movie);
}

submitMovieToProgram.addEventListener("click", function (event) {
    addMovieToProgram();
})