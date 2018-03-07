var ctrlModule = (function (ui, data) {
    console.log("controller log!");


    function setupEventListeners() {
        var DOM = ui.getDOMStrings();
        var createMovieButton = document.querySelector(DOM.createMovieButton);
        createMovieButton.addEventListener("click", function () {
            console.log("create new movie log!");
            var input = ui.getInput();
            if (!input.title || !input.length || input.genre === "none") {
                ui.showError(input);
                return;
            }
            movie = data.createNewMovie(input);
            ui.formReset();
            ui.addMovieToDiv();
            updateTotalLength();
        })
    }

    function updateTotalLength() {
        totalMovieLength = data.getTotalLength();
        ui.displayTotalLength(totalMovieLength);
    }

    function init() {
        setupEventListeners();

    }

    return {
        init: init
    }

})(UIModule, dataModule);

ctrlModule.init();