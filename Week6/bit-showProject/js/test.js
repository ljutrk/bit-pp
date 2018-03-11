const fetchUsers = (url) => {
    $.get(url)
        .done(onSuccessHandler)
        .fail(onErrorHandler)
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