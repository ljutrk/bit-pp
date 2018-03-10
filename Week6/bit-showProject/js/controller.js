var ctrlModule = (function (data, ui) {
    console.log("controller log!");

    function init() {
       data.getData();
       ui.showShowsOnPage(showList);
       console.log(data.showData.showList);
       
    }

    return {
        init: init
    }

})(dataModule, uiModule);

// ctrlModule.init();