"use strict";

class Festival {
    constructor(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMovies = 0;

    }

    addProgram(program) {
        this.listOfPrograms.push(program);
        this.numOfMovies += program.totalNumMovies;
    }

    getData() {
        var result = "";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            result += "\t" + this.listOfPrograms[i].getData();
        }
        var firstLine = `${this.name} has ${this.numOfMovies} movies\n`;
        result = firstLine + result;

        return result;
    }
}

function createFestival(name) {
    return new Festival(name);
}

module.exports = {
    createFestival
}