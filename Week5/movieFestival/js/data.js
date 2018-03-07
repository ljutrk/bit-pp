var dataModule = (function () {
    console.log("data log!");

    var movieData = {
        movieList: [],
        totalMovieLength: 0
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

    }

    Movie.prototype.getInfo = function () {
        return this.title + ", " + this.genreAbr() + ", " + this.length + "min."
    }

    Movie.prototype.genreAbr = function () {
        var firstLetter = this.genre.charAt(0);
        var lastLetter = this.genre.charAt(this.genre.length - 1);
        var genreAbr = firstLetter + lastLetter;
        return genreAbr.toUpperCase();
    }

    function calculateTotalLength() {
        var totalLength = 0;
        movieData.movieList.forEach(function (element) {
            totalLength += element.length;
        })
        movieData.totalMovieLength = totalLength;
    }

    function getTotalLength() {
        calculateTotalLength();
        return movieData.totalMovieLength;
    }

    function addMovieToMovieList(movieInput) {
        var movie = new Movie(movieInput.title, movieInput.genre, movieInput.length);
        movieData.movieList.push(movie);
        return movie;
    }

    return {
        createNewMovie: addMovieToMovieList,
        getTotalLength: getTotalLength
    }
})();