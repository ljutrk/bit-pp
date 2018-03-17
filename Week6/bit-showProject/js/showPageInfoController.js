var ctrlModule = (function (showData, seasonsData, castData, ui) {
    // console.log("showPageInfoController log!");

    const showID = localStorage.getItem("index");
    const init = () => {
        getAll();
    }

    const getAll = () => {
        const request = $.ajax({
            url: `http://api.tvmaze.com/shows/${showID}?embed[]=seasons&embed[]=cast`
        })

        request.done((response) => {
            // console.log(response);
            const show = showData.createShow(response);
            // console.log(show);
            const cast = castData.createCast(response._embedded.cast);
            // console.log(cast);
            const seasons = seasonsData.createSeasons(response._embedded.seasons);
            // console.log(seasons);
            ui.showShowsOnPage(show);
            ui.showCastOnPage(cast);
            ui.showSeasonsOnPage(seasons);
        })

    }

    return {
        init
    }

})(showDataModule, seasonsDataModule, castDataModule, uiModule);

// ctrlModule.init();