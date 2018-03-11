var dataModule = (function () {
    console.log("data log!");

    var showData = {
        showList: []
    }

    const constants = {
        baseurl: "http://api.tvmaze.com/shows"
    }

    class Show {
        constructor(title, image, id, rating) {
            this.title = title;
            this.image = image;
            this.id = id;
            this.rating = rating;
        }
    }

    const createShows = (response) => {

        const mappedResponse = response.map(show => {
            const { name, image, id, rating } = show;
            return new Show(name, image.medium, id, rating.average);
        })
        return mappedResponse;
    }

    return {
        showData: showData,
        constants: constants,
        createShows: createShows
    }
})();