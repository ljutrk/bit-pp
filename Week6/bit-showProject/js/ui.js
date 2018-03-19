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

    const showSearchResult = (response) => {
        console.log(response);

        // const search = $('.search');
        // const $ul = $('<ul>').addClass("list-group ulsearch");
        // for (let i = 0; i < 10; i++) {
        //     let showName = response[i].show.name;
        //     let showid = response[i].show.id;

        //     const $li = $('<li>').addClass("list-group-item").attr("id", showid).text(showName);
        //     $ul.append($li);
        // }
        // // search.append($ul);
        // // console.log($ul);

        // $ul[0].style.display = "block";
        const $search = $('.search');
        $div = $('<div>').addClass("dropdown-content");
        for (let i = 0; i < 10; i++) {
            let showName = response[i].show.name;
            let showid = response[i].show.id;
            $p = $('<p>').attr("id", showid).text(showName);
            $div.append($p);
        }
        $div.toggleClass(".toggle");
        $search.append($div);
    }



        // <div id="myDropdown" class="dropdown-content">
        //     <a href="#home">Home</a>
        //     <a href="#about">About</a>
        //     <a href="#contact">Contact</a>
        // </div>


    // <ul class="list-group">
    //     <li class="list-group-item">Cras justo odio</li>
    //     <li class="list-group-item">Dapibus ac facilisis in</li>
    //     <li class="list-group-item">Morbi leo risus</li>
    //     <li class="list-group-item">Porta ac consectetur ac</li>
    //     <li class="list-group-item">Vestibulum at eros</li>
    // </ul>

    return {
        showShowsOnPage,
        showSearchResult
    }

})();