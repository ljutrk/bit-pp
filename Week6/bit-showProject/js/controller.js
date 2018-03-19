var ctrlModule = (function (data, ui, searchData) {
    // console.log("controller log!");

    const init = () => {
        getData();
        showPageInfo();
        search();
    }

    const showPageInfo = () => {

        $(function () {
            $(document).on("click", function (event) {
                const eventID = parseInt(event.target.id);

                if (typeof eventID === "number" && event.target.id !== "") {
                    localStorage.setItem("index", event.target.id)
                    window.location = "showInfoPage.html";
                }

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

    const search = () => {

        var word = "";
        $('.search').keydown(event => {
            if (event.originalEvent.key === "Backspace") {
                word = word.slice(0, -1);
                console.log(word);
            }
        })
        $('.search').keypress(function (event) {
            // console.log(event.originalEvent);


            if (event.originalEvent.code === "Enter") {
                // console.log("yay!");
                const request = $.ajax({
                    url: `http://api.tvmaze.com/search/shows?q=${word}`
                })

                request.done((response) => {
                    // console.log(response);
                    const searchShows = searchData.createSearchData(response);
                    // console.log(searchShows);
                    
                    ui.showSearchResult(response);
                })


            } else {
                let char = event.originalEvent.key;
                word += char;
                console.log(word);

            }
        })

    }
    // alert(String.fromCharCode(event.which))
    // console.log($('.search')[0].value);
    // console.log(event.target);

    // searchRequestUrl = `http://api.tvmaze.com/shows/${event.target.id}?embed[]=seasons&embed[]=cast`

    // const request = $.get()

    return {
        init
    }

})(dataModule, uiModule, searchDataModule);

// ctrlModule.init();