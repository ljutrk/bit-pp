var UIModule = (function () {
    console.log("UI log!");

    function getFormData() {
        var titleElement = document.querySelector("#movie-title");
        var lengthElement = document.querySelector("#movie-length");
        var genreElement = document.querySelector("#genre-select");


        var title = titleElement.value;
        var length = lengthElement.value;
        var genre = genreElement.options[genreElement.selectedIndex].value;



        return {
            title: title,
            length: length,
            genre: genre
        }

    }

    function formReset() {
        var movieForm = document.querySelector(".form-movie")
        movieForm.formReset();
    }

    return {
        getInput: getFormData,
        clearInput: formReset
    }

})();