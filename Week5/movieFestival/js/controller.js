var ctrlModule = (function (ui, data) {
    console.log("controller log!");

    
    var createMovieButton = document.querySelector("#submitNewMovie");
    
    function setupEventListeners() {
        
        createMovieButton.addEventListener("click", function () {
            var input = ui.getInput();
            console.log("create new movie log!");
            console.log(input);
            console.log(ui.clearInput);
            data.createNewMovie(input)
            console.log(data.movie.getInfo);
            // ui.clearInput();
            
        })
    }
    
    
    function init() {
        setupEventListeners();
        
    }

    return {
        init: init
    }
})(UIModule, dataModule);

ctrlModule.init();