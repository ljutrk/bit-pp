var ctrlModule = (function (data, ui) {
    console.log("controller log!");

    // const url = "http://api.tvmaze.com/shows";
    const init = () => {
        getData();
        showPageInfo();


    }
    const showPageInfo = () => {

        // document.querySelector(".search").addEventListener("click", function(event){
        //     console.log(event);
        // })
        $(function () {
            $(document).on("click", function (event) {
                window.location = "showInfoPage.html";
                console.log(event.target.id);

            });

        });
    }


    const getData = () => {
        const request = $.ajax({
            url: `http://api.tvmaze.com/shows`
        })

        request.done((response) => {
            const shows = data.createShows(response);
            ui.showShowsOnPage(shows);
        })
    }

    return {
        init
    }

})(dataModule, uiModule);

// ctrlModule.init();