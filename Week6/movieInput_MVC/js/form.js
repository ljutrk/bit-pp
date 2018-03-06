var dataModule = (function () {
    
    var data = {
        movieList: []
    }
    
    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    function addMovie(formMovie) {
        var movie = new Movie(formMovie.title, formMovie.genre, formMovie.length);
        data.movieList.push(movie);
        return movie;
    }

    Movie.prototype.getData = function () {
        return this.title + ", " + this.genre + ", " + this.length + "min";
    }

    function test() {
        console.log(data);
        
    }

    return {
        createMovie: addMovie,
        test: test,
        getData: getData
    }
})();

var uiModule = (function () {

    function getFormData() {
        var titleElement = document.querySelector("#movie-title")
        var genreElement = document.querySelector("#genre-select")
        var lengthElement = document.querySelector("#movie-length")

        var title = titleElement.value;
        var genre = genreElement.options[genreElement.selectedIndex].value;
        var length = lengthElement.value;

        dataObj = {
            title: title,
            genre: genre,
            length: length
        }
        return dataObj;
    }

    return {
        getFormData: getFormData
    }

})();

var controllerModule = (function (uiModule, dataModule) {
    var submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", function(){
        var formMovie = uiModule.getFormData();
        // console.log(formMovie);
        var movieObj = dataModule.createMovie(formMovie);
        console.log(dataModule.test());
        
        
        
    })

})(uiModule, dataModule);