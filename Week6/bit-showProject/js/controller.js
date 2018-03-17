var ctrlModule = (function (data, ui) {
    // console.log("controller log!");

    const init = () => {
        getData();
        showPageInfo();
    }

    const showPageInfo = () => {
        
        $(function () {
            $(document).on("click", function (event) {
                if ((parseInt(event.target.id)) === "number") {
                localStorage.setItem("index", event.target.id)
                window.location = "showInfoPage.html";

                }
                // console.log(event.target.id);
                console.log(typeof parseInt(event.target.id));
                // console.log(event);

            });

        });
    }

    const getData = () => {
        const request = $.ajax({
            url: `http://api.tvmaze.com/shows`
        })

        request.done((response) => {
            // console.log(response);

            const shows = data.createShows(response);
            ui.showShowsOnPage(shows);
        })
    }

    return {
        init
    }

})(dataModule, uiModule);

// ctrlModule.init();