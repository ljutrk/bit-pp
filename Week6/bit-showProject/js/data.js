var dataModule = (function () {
    console.log("data log!");

    // var showData = {
    //     showList: []
    // }

    showList = [];

    class Show {
        constructor(title, image, id, rating) {
            this.title = title;
            this.image = image;
            this.id = id;
            this.rating = rating;
        }
    }

    function getData() {
        var request = $.ajax({
            url: `http://api.tvmaze.com/shows`,
        });
        request.done((response) => {
            // console.log(response)

            showList = response.map(show => {
                const {name, image, id, rating} = show;
                return new Show(name, image.original, id, rating.average);
            })
            
            return showList;
        })
        
        return showList;
    }

    return {
        getData: getData,
        // showData: showData
        showList: showList
    }
})();