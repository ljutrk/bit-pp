var uiModule = (function () {
    // console.log("ui log!");

    function showShowsOnPage(shows) {
        for (let i = 0; i < 48; i++) {
            var showName = shows[i].title;
            var showImg = shows[i].image;
            var showID = shows[i].id;

            $div = $("<div>").addClass("showDiv").attr("id", showID);
            $img = $("<img>").attr("src", showImg).attr("id", showID).attr("class", "clickable");
            $($div).append($img);
            $p = $("<p>").append(showName).attr("id", showID);
            $($div).append($p);
            $('#popularShows').append($div);
        }
    }

    return {
        showShowsOnPage: showShowsOnPage
    }

})();