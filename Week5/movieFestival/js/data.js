var dataModule = (function () {
    var data = {
        movieList: []
    }

    function addMovieToMovieList(movieInput) {
        var movie = new Movie(movieInput.title, movieInput.length, movieInput.genre);
        data.movieList.push(movie);
        return movie;
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

    }

    Movie.prototype.getInfo = function () {
        return this.title + ", " + this.genre + ", " + this.length + "min."
    }


    console.log("data log!");

    return {
        movie: movie,
        createNewMovie: addMovieToMovieList,
    }
})();