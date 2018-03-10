var uiModule = (function(){
console.log("ui log!");

    function showShowsOnPage(shows) {
            for (let i = 0; i < 50; i++) {
                var showName = shows[i].title;
                var showImg = shows[i].image.original;
console.log(shows);

                $div = $("<div>").addClass("showDiv");
                $img = $("<img>").attr("src", showImg);
                $($div).append($img);
                $p = $("<p>").append(showName);
                $($div).append($p);
                $('#popularShows').append($div);
            }
        }

        return {
            showShowsOnPage:showShowsOnPage
        }
})();