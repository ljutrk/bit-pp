"use strict";

class Program {
    constructor(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumMovies = 0;

    }

    getData() {
        var result = "";
        var totalTime = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            result += "\t\t" + this.listOfMovies[i].getData() + "\n";
            totalTime += this.listOfMovies[i].length;
        }
        var firstRow = `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}, program duration ${totalTime}min\n`;
        result = firstRow + result;

        return result;
    }

    addMovie(movie) {
        this.listOfMovies.push(movie);
        this.totalNumMovies++;
    }
}

function createProgram(date) {
    return new Program(date);
}

module.exports = {
    createProgram
}