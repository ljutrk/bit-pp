var uiModule = (function () {
    // console.log("showPageInfoIi log!");

    const showShowsOnPage = (show) => {
        // console.log(show);

        var showName = show.title;
        var showImg = show.image;
        var showInfo = show.summary;

        $showInfo = $('#showDetails');
        $showInfo.html(showInfo);
        $ShowName = $('#showName');
        $ShowName.text(showName);
        $showContent = $('#showContent');
        $showIMG = $('<img>').attr("src", showImg).attr("id", "showIMG");
        $showContent.append($showIMG);
    }

    const showCastOnPage = (cast) => {
        // console.log(cast);

        $showContent = $('#showContent');
        $cast = $('<p>').text("Cast");
        $showContent.append($cast);
        $ul = $('<ul>').attr("id", "castUl");
        
        for (let i = 0; i < 7; i++) {
            castMember = cast[i].person.name;
            $li = $('<li>').attr("class", "castLi");
            $li.text(castMember);
            $ul.append($li);
        }
        $showContent.append($ul)
    }

    const showSeasonsOnPage = (seasons) => {
        // console.log(seasons);

        $showContent = $('#showContent');
        $seasons = $('<p>').text(`Seasons(${seasons.length})`);
        $showContent.append($seasons);
        $ul = $('<ul>').attr("id", "seasonsUl");

        for (let i = 0; i < seasons.length; i++) {
            seasonStart = seasons[i].premiereDate;
            seasonEnd = seasons[i].endDate;
            $li = $('<li>').attr("class", "seasonsLi");
            $li.text(`${seasonStart} - ${seasonEnd}`)
            $ul.append($li);
        }
        $showContent.append($ul)
    }

    return {
        showShowsOnPage,
        showCastOnPage,
        showSeasonsOnPage
    }
})();