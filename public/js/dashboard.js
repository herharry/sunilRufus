let genres = []
let lang = []
let movies;
let GAMES;
let TID_LIST = [];
let game

function getMovieFromLocalStorage() {
    let moviesInLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if (moviesInLocalStorage == undefined) {
        iziToast.error({
            message: "no movies loaded! showing some default hard coded movies we have",
            position: "topRight"
        })
    }
    movies = JSON.parse("[{\r\n  \"id\":1,\r\n  \"movie\" : \"Anniyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"suspense\", \"thriller\"],\r\n  \"rating\" : 4,\r\n  \"language\" : [\"tamil\"],\r\n  \"date\" : 1604852551\r\n},\r\n{\r\n  \"id\":2,\r\n  \"movie\" : \"Banyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"comedy\"],\r\n  \"rating\" : 2,\r\n  \"language\" : [\"tamil\"],\r\n  \"date\" : 1604852531\r\n},\r\n{\r\n  \"id\":3,\r\n  \"movie\" : \"Saniyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"suspense\"],\r\n  \"rating\" : 1,\r\n  \"language\" : [\"tamil\", \"english\"],\r\n  \"date\" : 1604852572\r\n},\r\n{\r\n  \"id\":4,\r\n  \"movie\" : \"jsdbfhbsd\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"horror\"],\r\n  \"rating\" : 4,\r\n  \"language\" : [\"tamil\", \"telugu\"],\r\n \"date\" : 1604852451\r\n},\r\n{\r\n  \"id\":5,\r\n  \"movie\" : \"Suriya\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"thriller\"],\r\n  \"rating\" : 4,\r\n  \"language\" : [\"malayalam\", \"english\"],\r\n  \"date\" : 1604852431\r\n}]\r\n")
}

function loadMovieJS() {
    let user = JSON.parse(localStorage.getItem("current_user"));
    console.log(user)
    iziToast.info({
        title: "welcome " + user.userName,
        position: "topRight"
    });
    getMovieFromLocalStorage();
    setGenres()
    setLanguage()
    movieLoader()
}

function createTemplate(data) {
    return `
    <div class="custom-control custom-checkbox ml-2 pb-2">
        <input type="checkbox" class="custom-control-input filled-in" id="${data.toLowerCase()}">
            <label
                class="custom-control-label small w-100 text-uppercase card-link-secondary px-2 py-1"
                for="${data.toLowerCase()}">${data}
            </label>
    </div>
            `
}

function setLanguage() {
    for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < movies[i].language.length; j++) {
            lang.push(movies[i].language[j])
        }
    }
    lang = [...new Set(lang)];
    renderLanguage(lang)
}

function setGenres() {
    for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < movies[i].genre.length; j++) {
            genres.push(movies[i].genre[j])
        }
    }
    genres = [...new Set(genres)];
    renderGenre(genres)
}

function renderLanguage(genres) {
    const template =
        genres.length === 0 ? `
    <p class="mx-auto">No matching results found.</p>
    ` : genres.map((product) => createTemplate(product)).join("\n");
    $("#languageFilter").html("<p>Language</p>" + template);

}

function renderGenre(genres) {
    const template =
        genres.length === 0 ? `
    <p class="mx-auto">No matching results found.</p>
    ` : genres.map((product) => createTemplate(product)).join("\n");
    $("#genreFilter").html("<p>Genres</p>" + template);

}

function movieLoader() {
    console.log(movies)

    if (movies.empty) {
        $("#movieLoader").hide()
        if ($("#noData").length == 0)
            $("#movieCards").append("<p class=\"mx-auto my-5\" id=\"noData\">No data found</p>")
    }
    deleteAllCards();
    sortElements(movies);
}
// console.log("helos")
//FIREBASE AUTHENTICATION FOR THE CURRENT USER ENDS *****************************************************************************


function loadMovieInNewCard(movie, ids) {
    $("#movieLoader").hide();
    const cardParent = document.getElementById(ids)
    let carddiv = document.createElement("div");
    carddiv.className = " col-12 col-md-3 px-3 py-2"
    let card = document.createElement("div");
    card.className = "card";
    card.id = ids + "CARD" + movie.id;
<<<<<<< HEAD:public/js/dashboard.js
    card.setAttribute("onclick","loadSpecificMovie(this)");

=======
    card.setAttribute("onclick","loadSpecificTournament(this)")
>>>>>>> added:public/js/TournamentLoader.js
    let image = document.createElement("img");
    image.src = movie.url;
    image.className = "card-img-top";
    // image.setAttribute("width","50%");
    // image.setAttribute("height","50%");


    let movieNames = document.createElement("h5");
    movieNames.id = ids + "NAMES" + movie.id;
    movieNames.className = "text-upper";
    movieNames.innerText = movie.movie;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body bg-dark rounded-lg p-2";
    
    let ratingStar = document.createElement("span")
    ratingStar.className = "fa fa-star text-primary fa-xs"
    // let ratingPara = document.createElement("p");
    // ratingPara.innerHTML = movie.rating + "/" + 5;
    // let cardBottom = document.createElement("div");
    // cardBottom.className = "row mb-2 border-bottom"

    card.appendChild(image);
    card.appendChild(cardBody);
    cardBody.appendChild(movieNames);
    for (let i = 0; i < 5; i++) {
        i < movie.rating ? ratingStar.className = "fa fa-star text-warning fa-xs" : ratingStar.className = "fa fa-star fa-xs"
        cardBody.appendChild(ratingStar.cloneNode(true));
    }

    // cardBody.appendChild(ratingPara);
    // cardBody.appendChild(cardBottom);
    carddiv.appendChild(card);
    cardParent.appendChild(carddiv);
    // let parent = document.getElementById(ids);
    // card.addEventListener("click", function() {showMovieModal(tournament.id)},true);
    // let img = document.createElement("img");
    // img.src = tournament.url;
    // let card_im = document.createAttribute("class");
    // card_im.value = "card-img-top card_img"
    // img.setAttributeNode(card_im)
    // let att = document.createAttribute("class");
    // att.value = "col-3 p-0 mr-4 bg-dark game-scroll-box  card";
    // card.setAttributeNode(att);
    // card.appendChild(img);
    // parent.appendChild(card);
}


function loadTournamentInExistingCard(tournament, ids) {

    let tournamentNames = document.getElementById(ids + "NAMES" + tournament.id);
    tournamentNames.innerText = tournament.name;
    let tournamentprize = document.getElementById(ids + "NAME" + tournament.id);
    var total = 0;
    tournament.prizePool.forEach(element => {
        total += element;
    });
    tournamentprize.innerText = "prize pool" + '\n' + total;
    let amount = document.getElementById(ids + "AMOUNT" + tournament.id);
    amount.innerText = "Amount " + '\n' + tournament.amount;
    let time = document.getElementById(ids + "TIME" + tournament.id);
    let timestamp = tournament.time.seconds * 1000;
    let tournamentDate = new Date(timestamp).toLocaleString(undefined, {
        month: 'short',
        day: '2-digit',
        year: 'numeric'

    })
    let tournamentTime = new Date(timestamp).toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit'
    });
    time.innerHTML = tournamentDate + "<br>" + tournamentTime;
    let players = document.getElementById(ids + "PLAYERS" + tournament.id);
    players.innerHTML = "seats <br>" + (tournament.totalSeats - tournament.vacantSeats) + "/" + tournament.totalSeats;
    let progressBar = document.getElementById(ids + "PROGRESS_BAR" + tournament.id);
    let percent = ((tournament.totalSeats - tournament.vacantSeats) / tournament.totalSeats) * 100;
    progressBar.setAttribute("style", "width :" + percent + "%");
    progressBar.innerHTML = parseInt(percent) + "% full";
    let remainig = document.getElementById(ids + "REMAINING" + tournament.id);
    remainig.innerHTML = tournament.vacantSeats + " remaining";
}


function formatResponse(res) {
    const ta = Object.keys(res).map(key => ({
        ...res[key],
        tournamentID: key
    }));
    return ta;
}

function loadSpecificMovie(movieRef) {
    let movieID = movieRef.id;
    movieID.split("CARD")[1] != undefined ? movieID = movieID.split("CARD")[1] : movieID = movieID
    window.location.assign("./tournament.html?id=" + movieID);
}

//todo show only unregistered tournaments
//todo in the live tournament tab rename it as registered tournament and click to view it...


function gatherFilterElements() {

    let filterList = [];
    let x;

    genres.forEach(element => {
        x = document.getElementById(element.toLowerCase()).checked ? filterList.push(element.toLowerCase()) : '';
    });

    lang.forEach(element => {
        x = document.getElementById(element.toLowerCase()).checked ? filterList.push(element.toLowerCase()) : '';
    });

    console.log(filterList)
    //

    // x = document.getElementById("today").checked ? filterList.push("today") : '';
    // x = document.getElementById("tomorrow").checked ? filterList.push("tomorrow") : '';
    // //yet to do
    // if (document.getElementById("customDates").value)
    //     x = document.getElementById("customDate").checked ? filterList.push("customDate") : '';
    // console.log(filterList)
    applyFilter(filterList)
}

function applyFilter(filterIDs) {
    if (filterIDs.length != 0) {
        let movieList = [];
        for (let i = 0; i < filterIDs.length; i++) {

            genres.forEach(element => {
                if (filterIDs[i] == element.toLowerCase()) {
                    movieList = movieList.concat(getRequiredTournamentList("genre", element));
                }

            });

            lang.forEach(element => {
                if (filterIDs[i] == element.toLowerCase()) {
                    movieList = movieList.concat(getRequiredTournamentList("lang", element));
                }

            });

        }
        let reqList = [...new Set(movieList)];
        console.log(reqList)
        deleteAllCards();
        $("#movieLoader").show()
        let filteredMovies = [];
        if (reqList.length != 0) {
            for (let i = 0; i < reqList.length; i++) {
                console.log(reqList[i])
                movies.forEach(function (movie) {
                    if (reqList[i] == movie.id) {
                        console.log("founddddd" + movie)
                        filteredMovies.push(movie);
                        return false;
                    }
                });
            }
            sortElements(filteredMovies)
        } else {
            $("#tournamentLoader").hide()
            if ($("#noData").length == 0)
                $("#movieCards").append("<p class=\"mx-auto my-5\" id=\"noData\">No data found</p>")
        }
    } else {
        // if no filters are selected
        if ($("#noData").length != 0) {
            $("#noData").remove()
        }

        movieLoader()
    }
}


function getRequiredTournamentList(filterType, filterID) {

    let reqList = [];

    switch (filterType) {
        case "genre":
            movies.forEach(function (movie) {
                let movieGenreList = movie.genre;
                for (let j = 0; j < movieGenreList.length; j++) {
                    if (movieGenreList[j] == filterID) {
                        reqList.push(movie.id);
                        break;
                    }
                }
            });
            break;
        case "lang":
            movies.forEach(function (movie) {
                let movieLanguageList = movie.language;
                for (let j = 0; j < movieLanguageList.length; j++) {
                    if (movieLanguageList[j] == filterID) {
                        reqList.push(movie.id);
                        break;
                    }
                }
            });
            break;

    }
    console.log(reqList)
    return reqList;
}

function deleteAllCards() {
    document.getElementById("movieCards").remove();
    let newParent = document.createElement("div");
    newParent.className = "d-flex justify-content-evenly flex-wrap col-12 p-0"
    newParent.id = "movieCards";
    document.getElementById("movieBody").appendChild(newParent);
}

function sortElements(sortMovies) {
    let rate = document.getElementById("rating").checked;
    let time = document.getElementById("time").checked;
    console.log(rate)
    console.log(time)

    if (rate == true) {
        sortMovies.sort(dynamicSort("-rating"))
    } else if (time == true) {
        sortMovies.sort(dynamicSort("-date"))
    } else if (rate == true && time == true) {
        sortMovies.sort(dynamicSortMultiple("-rating", "-date"))
    }

    sortMovies.forEach(function (movie) {
        loadMovieInNewCard(movie, "movieCards")
    })
}

function dynamicSort(property) {
    console.log("i")
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        /* next line works with strings and numbers,
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function dynamicSortMultiple() {
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0,
            result = 0,
            numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while (result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}