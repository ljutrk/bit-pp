"use strict";

(function () {

    function Genre(name) {
        this.name = name;

        this.getData = function () {
            var firstLetter = this.name.charAt(0);
            var lastLetter = this.name.charAt(name.length - 1);
            var result = firstLetter + lastLetter;
            return result.toUpperCase();
        }
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function () {
            return this.title + ", " + this.genre + ", " + this.length + "min.";
        }

    }

    function Program(date, totalNumMovies) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumMovies = totalNumMovies;

        // this.getData = function () { 
        //     totalMovLength = mov1.length + mov2.length;
        //     return this.date.getDate().getMonth().getYear() + totalMovLength + "min" ;
        // }
        this.addMovie = function (movie) {
            this.listOfMovies.push (movie);
            return 
        }
    }

    function Festival(name, numOfMovies) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMovies = numOfMovies;
    }



    var gen1 = new Genre("Action");
    var gen2 = new Genre("Action");
    var mov1 = new Movie ("The Shawshank Redemption", gen1.getData(), 130);
    var mov2 = new Movie ("Spider-Man: Homecoming", gen1.getData(), 133);
    var prog1 = new Program ("19.02.2018.", [mov1, mov2]);

    
    console.log(prog1.getData());

})();