var json = JSON.parse("[{\r\n  \"id\":1,\r\n  \"movie\" : \"Anniyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"suspense\", \"thriller\"],\r\n  \"rating\" : 4,\r\n  \"date\" : \"2020-01-01\"\r\n},\r\n\r\n{\r\n  \"id\":2,\r\n  \"movie\" : \"Banyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"comedy\"],\r\n  \"rating\" : 2,\r\n  \"date\" : \"2020-02-02\"\r\n},\r\n\r\n{\r\n  \"id\":3,\r\n  \"movie\" : \"Saniyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"suspense\"],\r\n  \"rating\" : 1,\r\n  \"date\" : \"2020-03-03\"\r\n},\r\n\r\n{\r\n  \"id\":4,\r\n  \"movie\" : \"jsdbfhbsd\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"horror\"],\r\n  \"rating\" : 4,\r\n  \"date\" : \"2020-04-04\"\r\n},\r\n\r\n{\r\n  \"id\":5,\r\n  \"movie\" : \"Suriya\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"thriller\"],\r\n  \"rating\" : 4,\r\n  \"date\" : \"2020-05-05\"\r\n}\r\n]\r\n")
// console.log(json);



//todo action to create cards
function loadGameInCard()
{
    const parent = document.getElementById("movies");
    for(let i=0;i<json.length;i++)
    {

        let card =document.createElement("div");
        card.addEventListener("click", function() {showMovieModal(json[i].id)},true);
        let img = document.createElement("img");
        img.src = json[i].url;
        let card_im = document.createAttribute("class");
        card_im.value = "card-img-top card_img"
        img.setAttributeNode(card_im)
        let att = document.createAttribute("class");
        att.value = "col-3 p-0 mr-4 bg-dark game-scroll-box  card";
        card.setAttributeNode(att);
        card.appendChild(img);
        let p = document.createElement("p");
        p.innerHTML = json[i].movie;
        let al = document.createAttribute("class");
        al.value = "align-middle"
        p.setAttributeNode(al);
        card.appendChild(p);
        parent.appendChild(card);


    }
}



function formatResponse(res)
{
    const ta =  Object.keys(res).map(key => ({
        ...res[key],
        tournamentID: key
    }));
    return ta;
}

function showMovieModal(id)
{

  console.log("ghdhg");

  var modal = document.getElementById("myModal");

  var span = document.getElementsByClassName("close")[0];


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function doGetGam(res)
{
    console.log(res)
    //todo create a new TournamentLoader.js, create a function called loadTournamentInCards and send this json to dat method.
    //todo pass the div id so dat it can create card wherever the div is.... (used to render tournament card in diff places)
}
