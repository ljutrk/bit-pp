"use strict";

class Genre {
    constructor(name) {
        this.name = name;
    }
    getData() {
        var firstLetter = this.name.charAt(0);
        var lastLetter = this.name.charAt(this.name.length - 1);
        var result = firstLetter + lastLetter;
        return result.toUpperCase();
    }
}

function createGenre(genre) {
    return new Genre (genre);
}

module.exports = {
    createGenre
}