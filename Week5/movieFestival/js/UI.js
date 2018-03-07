var UIModule = (function () {
    console.log("UI log!");

    var DOMStrings = {
        title: "#movie-title",
        length: "#movie-length",
        genre: "#genre-select",
        newMovieContainer: ".newMovieContainer",
        movieForm: ".form-movie",
        createMovieButton: "#submitNewMovie",
        totalTimeSpan: ".totalTime",
        errorMessageDiv: ".error"
    }

    function getFormData() {
        var titleElement = document.querySelector(DOMStrings.title);
        var lengthElement = document.querySelector(DOMStrings.length);
        var genreElement = document.querySelector(DOMStrings.genre);

        var title = titleElement.value;
        var length = lengthElement.value;
        var genre = genreElement.options[genreElement.selectedIndex].value;

        return {
            title: title,
            length: parseInt(length),
            genre: genre
        }

    }

    function addMovieToDiv() {
        var newMovieContainer = document.querySelector(DOMStrings.newMovieContainer);
        var p = document.createElement("p");
        p.textContent = movie.getInfo();
        newMovieContainer.appendChild(p);

    }

    function displayTotalLength(totalMovieLength) {
        var totalTimeSpan = document.querySelector(DOMStrings.totalTimeSpan);
        totalTimeSpan.textContent = totalMovieLength;
    }

    function getDOMStrings() {
        return DOMStrings;
    }

    function formReset() {
        var movieForm = document.querySelector(DOMStrings.movieForm)
        document.querySelector(DOMStrings.errorMessageDiv).textContent = "";
        movieForm.reset();
    }

    function showError(input) {
        var errorMsg = "ERROR!";
        if (!input.title) {
            errorMsg = "Please enter movie title!";
        } else if (!input.length) {
            errorMsg = "Please enter movie length!";
        } else if (input.genre === "none") {
            errorMsg = "Please select movie genre!";
        }

        document.querySelector(DOMStrings.errorMessageDiv).textContent = errorMsg;
    }

    return {
        getInput: getFormData,
        addMovieToDiv: addMovieToDiv,
        displayTotalLength: displayTotalLength,
        getDOMStrings: getDOMStrings,
        formReset: formReset,
        showError: showError
    }

})();