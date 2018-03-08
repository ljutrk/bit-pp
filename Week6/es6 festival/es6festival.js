"use strict";

class Genre {
    constructor(name) {
        this.name = name;
    }
    getData() {
        let firstLetter = (this.name.charAt(0)).toUpperCase();
        let lastLetter = (this.name.charAt(this.name.length - 1)).toUpperCase();
        return `${firstLetter}${lastLetter}`;
    }

}

class Movie {
    constructor(title, genreObj, length) {
        this.title = title;
        this.genreObj = genreObj;
        this.length = length;
    }

}

class Program {
    constructor(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumOfMovies = 0;
    }
}

class Festival {
    constructor(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.totalNumOfMoviesInAllPrograms = 0;
    }
}

function createMovie(title, genre, length) {
    var genreObj = new Genre(genre);

    return new Movie(title, genreObj, length);
}
var movie = createMovie("Titanic", "drama", 120);

var mList = [];
mList.push(movie);

console.log(mList[0]);
console.log(mList[0].genreObj);
console.log(mList[0].genreObj.getData());