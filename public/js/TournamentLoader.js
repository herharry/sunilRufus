let user = JSON.parse(localStorage.getItem("current_user"));
console.log(user)
iziToast.info({
    title: "welcome " + user.userName,
    position: "topRight"
});

var movies ;
let GAMES;
let TID_LIST = [];
let game

function getMovieFromLocalStorage()
{
    let moviesInLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if(moviesInLocalStorage == undefined)
    {
        iziToast.error({
            message: error.message,
            position: "topRight"
        })
    }
    movies = JSON.parse("[{\r\n  \"id\":1,\r\n  \"movie\" : \"Anniyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"suspense\", \"thriller\"],\r\n  \"rating\" : 4,\r\n  \"language\" : \"dsd\",\r\n  \"date\" : \"2020-01-01\"\r\n},\r\n{\r\n  \"id\":2,\r\n  \"movie\" : \"Banyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"comedy\"],\r\n  \"rating\" : 2,\r\n  \"language\" : \"dsd\",\r\n  \"date\" : \"2020-02-02\"\r\n},\r\n{\r\n  \"id\":3,\r\n  \"movie\" : \"Saniyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"suspense\"],\r\n  \"rating\" : 1,\r\n  \"language\" : \"dsd\",\r\n  \"date\" : \"2020-03-03\"\r\n},\r\n{\r\n  \"id\":4,\r\n  \"movie\" : \"jsdbfhbsd\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"horror\"],\r\n  \"rating\" : 4,\r\n  \"language\" : \"dsdasf\",\r\n  \"date\" : \"2020-04-04\"\r\n},\r\n{\r\n  \"id\":5,\r\n  \"movie\" : \"Suriya\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"thriller\"],\r\n  \"rating\" : 4,\r\n  \"language\" : \"dsefwqrgd\",\r\n  \"date\" : \"2020-05-05\"\r\n}]\r\n")
}
function loadMovieJS() {
    getMovieFromLocalStorage();
    setGenres()
    setLanguage()
    tournamentListener()
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
    let genres = []
    for (let i = 0; i < movies.length; i++) {
        if (!genres.includes(movies[i].language.toLowerCase()))
            genres.push(movies[i].language.toLowerCase())
    }
    renderLanguage(genres)
}

function setGenres() {
  let genres = []
  for(let i=0;i<movies.length;i++)
  {
      for(let j=0;j<movies[i].genre.length;j++) {
        genres.push(movies[i].genre[j])
      }
  }
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
    $("#gameFilter").html("<p>Genres</p>" + template);

}



function tournamentListener() {

      if (json.empty) {
          $("#tournamentLoader").hide()
          if ($("#noData").length == 0)
              $("#tournamentCards").append("<p class=\"mx-auto my-5\" id=\"noData\">No data found</p>")
      }

      tournamentHolder = [];
      json.forEach(function (doc) {
          let tournament = {};
          tournament = doc
          tournamentHolder.push(tournament)
          let flag = document.getElementById("tournamentCards" + "CARD" + tournament.id);
          loadTournamentInNewCard(tournament, "tournamentCards")
      })
  }
    // console.log("helos")
//FIREBASE AUTHENTICATION FOR THE CURRENT USER ENDS *****************************************************************************


function loadTournamentInNewCard(tournament, ids) {
    $("#tournamentLoader").hide();
    // console.log(tournament)
    const cardParent = document.getElementById(ids)
    let card = document.createElement("div");
    card.className = "card col-12 col-lg-6 p-0 my-2 px-1";
    card.id = ids + "CARD" + tournament.id;

    // let img = document.createElement("img");
    // img.src = getGameImage(tournaments[i].gameID)
    // img.className = "card-img-top";
    // img.alt = "";
    let tournamentNames = document.createElement("h3");
    tournamentNames.id = ids + "NAMES" + tournament.id;
    tournamentNames.className = "card-title text-upper";
    tournamentNames.innerText = tournament.movie;
    let cardBody = document.createElement("div");
    cardBody.className = "card-body  bg-dark rounded-lg py-2";
    let cardBottom = document.createElement("div");
    cardBottom.className = "row mb-2 border-bottom"



    // card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(tournamentNames);
    cardBody.appendChild(cardBottom);

    cardParent.appendChild(card);
    let parent = document.getElementById(ids);
    card.addEventListener("click", function() {showMovieModal(tournament.id)},true);
    let img = document.createElement("img");
    img.src = tournament.url;
    let card_im = document.createAttribute("class");
    card_im.value = "card-img-top card_img"
    img.setAttributeNode(card_im)
    let att = document.createAttribute("class");
    att.value = "col-3 p-0 mr-4 bg-dark game-scroll-box  card";
    card.setAttributeNode(att);
    card.appendChild(img);
    parent.appendChild(card);
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

function loadSpecificTournament(tid) {
    // console.log(tid)
    tid.split("CARD")[1] != undefined ? tid = tid.split("CARD")[1] : tid = tid
    window.location.assign("/tournaments?tid=" + tid);
}

//todo show only unregistered tournaments
//todo in the live tournament tab rename it as registered tournament and click to view it...


function gatherFilterElements() {


    let filterList = [];
    let x;
    GAMES.forEach(element => {
        x = document.getElementById(element.name.toLowerCase()).checked ? filterList.push(element.name.toLowerCase()) : '';
    });

    x = document.getElementById("open").checked ? filterList.push("open") : '';
    x = document.getElementById("full").checked ? filterList.push("full") : '';
    x = document.getElementById("today").checked ? filterList.push("today") : '';
    x = document.getElementById("tomorrow").checked ? filterList.push("tomorrow") : '';
    //yet to do
    if (document.getElementById("customDates").value)
        x = document.getElementById("customDate").checked ? filterList.push("customDate") : '';
    // console.log(filterList)
    applyFilter(filterList)
}

function applyFilter(filterIDs) {
    if (filterIDs.length != 0) {
        let tidList = [];
        for (let i = 0; i < filterIDs.length; i++) {

            GAMES.forEach(element => {
                if (filterIDs[i] == element.name.toLowerCase()) {
                    tidList = tidList.concat(getRequiredTournamentList("gameName", element.name));
                }

            });

            if (filterIDs[i] == "open") {
                tidList = tidList.concat(getRequiredTournamentList("gameStatus", "open"));
            }
            if (filterIDs[i] == "full") {
                tidList = tidList.concat(getRequiredTournamentList("gameStatus", "full"));
            }
            if (filterIDs[i] == "today") {
                tidList = tidList.concat(getRequiredTournamentList("date", "today"));
            }
            if (filterIDs[i] == "tomorrow") {
                tidList = tidList.concat(getRequiredTournamentList("date", "tomorrow"));
            }
            if (filterIDs[i] == "customDate") {
                tidList = tidList.concat(getRequiredTournamentList("customDate", document.getElementById("customDates").value));
            }

        }
        let reqList = [...new Set(tidList)];
        // console.log(reqList)
        deleteAllCards();
        $("#tournamentLoader").show()
        if (reqList.length != 0) {
            for (let i = 0; i < reqList.length; i++) {
                for (let j = 0; j < tournamentHolder.length; j++) {
                    if (reqList[i] == tournamentHolder[j].id) {
                        loadTournamentInNewCard(tournamentHolder[j], "tournamentCards")
                        break;
                    }
                }
            }
        } else {
            $("#tournamentLoader").hide()
            if ($("#noData").length == 0)
                $("#tournamentCards").append("<p class=\"mx-auto my-5\" id=\"noData\">No data found</p>")
        }
    } else {
        // if no filters are selected
        if ($("#noData").length != 0) {
            $("#noData").remove()
        }

        tournamentListener()
    }
}


function getRequiredTournamentList(filterType, filterID) {

    let tidList = [];
    tournamentHolder.forEach(function (tournament) {
        for (let i = 0; i < GAMES.length; i++) {
            if (GAMES[i].gameID == tournament.gameID) {
                switch (filterType) {
                    case "gameName":
                        if (GAMES[i].name == filterID) {
                            tidList.push(tournament.id)
                        }
                        case "gameStatus":
                            if (tournament.vacantSeats != 0 && filterID == "open") {
                                tidList.push(tournament.id)
                            }
                            if (tournament.vacantSeats == 0 && filterID == "full") {
                                tidList.push(tournament.id)
                            }
                            case "date":
                                if (filterID == "today" && new Date(Date.now()).toDateString() == new Date(tournament.time.seconds * 1000).toDateString()) {
                                    tidList.push(tournament.id)
                                }
                                const tomorrow = new Date(new Date)
                                tomorrow.setDate(tomorrow.getDate() + 1)
                                if (filterID == "tomorrow" && tomorrow.toDateString() == new Date(tournament.time.seconds * 1000).toDateString()) {
                                    tidList.push(tournament.id)
                                }
                                case "customDate":
                                    if (new Date(filterID).toDateString() == new Date(tournament.time.seconds * 1000).toDateString()) {
                                        tidList.push(tournament.id)
                                    }

                }
                break;
            }
        }
    });
    // console.log(tidList)
    return tidList;
}

function deleteAllCards() {
    document.getElementById("tournamentCards").remove();
    let newParent = document.createElement("div");
    newParent.className = "d-flex justify-content-between flex-wrap col-12"
    newParent.id = "tournamentCards";
    document.getElementById("tournamentBody").appendChild(newParent);
}


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("filter").remove();
}

