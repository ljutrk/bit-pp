var sumOfmovieLength = 0;
var movieCounter = 0;
var movieList = [];
var dateInput = document.querySelector("#program-date").value;
var programCounter = 0;
var programList = [];

var dateButton = document.querySelector("#submitNewProgram");
dateButton.addEventListener("click", function (event) {
    createProgram();
})

var submit = document.querySelector("#submitNewMovie");
submit.addEventListener("click", function (event) {
    createMovie();
});

// var movieToProgram = document.querySelector("#submitMovieToProgram");
// submit.addEventListener("click", function (event) {
//     createMovieProgram();
// });

function Movie(title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;

}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min, " + this.makeAbr();
}

Movie.prototype.makeAbr = function () {
    var firstLetter = this.genre[0];
    var lastLetter = this.genre[this.genre.length - 1];
    return (firstLetter + lastLetter).toUpperCase();
}

function Program(date) {
    this.date = new Date(date);
    this.movieList = [];
    this.movieProgramList = [];
}

Program.prototype.addMovie = function (movie) {
    this.movieProgramList.push(movie);
}

Program.prototype.getData = function () {
    return "zzzz";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function createMovie() {
    var title = document.querySelector("#movie-title").value;
    var length = document.querySelector("#movie-length").value;
    var genre = document.querySelector("#genre-select").value;

    var movie = new Movie(title, length, genre);

    movieList.push(movie);

    createNewElement(movie);
    getMovieLength(movieList);
    console.log(movie.getData());
    totalTime(getMovieLength(movieList));
    addMovieToDropdown(movie);
    movieCounter++;
}

function addMovieToDropdown(movie) {
    var movieMenu = document.querySelector("#movie-select");
    var option = document.createElement("option");
    option.textContent = movie.getData();
    option.value = movieCounter;
    movieMenu.appendChild(option);
}


function createNewElement(movie) {
    var newMovieContainer = document.querySelector(".newMovieContainer");
    var p = document.createElement("p");
    movie = movieList[movieList.length - 1];
    p.textContent = movie.getData();
    newMovieContainer.appendChild(p);
}

function getMovieLength(movieList) {
    var sumOfmovieLength = 0;

    movieList.forEach(function (movie) {
        sumOfmovieLength = sumOfmovieLength + movie.length;

    });

    return sumOfmovieLength;
}

function totalTime(sumOfmovieLength) {
    var spanLength = document.querySelector(".totalTime");
    spanLength.textContent = sumOfmovieLength;

}

/////////////////////////////////////////////////////////////////////////////////////////////////


function createProgram() {
    var program = new Program(dateInput);
    programList.push(program);
    addProgramToDropdown(program);
    programCounter++;
}

function addProgramToDropdown(program) {
    var programMenu = document.querySelector("#program-select");
    var option = document.createElement("option");
    option.textContent = program.getData();
    option.value = programCounter;
    programMenu.appendChild(option);
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function createMovieProgram(movieList, programList) {
    var programOption = document.querySelector("#program-select")
    var movieOption = document.querySelector("#movie-select")
    var movie = movieList[movieOption.value];
    var program = programList[programOption.value]
    program.addMovie(movie);
    
}
