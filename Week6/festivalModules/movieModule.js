"use strict";

const {createGenre} = require('./genreModule')

class Movie {
    constructor(title, genreObject, length) {
        this.title = title;
        this.genreObject = genreObject;
        this.length = length;

    }
    getData() {
        return `${this.title}, ${this.genreObject.getData()}, ${this.length}min.`;
    }
}

function createMovie(title, length, genre) {
    return new Movie(title, createGenre(genre), length);
}

module.exports = {
    createMovie
}