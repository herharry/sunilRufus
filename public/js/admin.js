let GAMES;
let TOURNAMENTS;
let userAuthHolder = [];
// $(":reset").click(()=>{$(".img-responsive").each(()=>{$(this).attr("src","")})})

iziToast.info({
    title: "to add multiple genres and languages leave a space in between",
    position: "topRight"
});

function requestMovie()
{
    let movies = getMovieFromLocalStorage("some error")
    let movieName = document.getElementById("requestMovieName").value;
    let movieGenre = document.getElementById("requestGenre").value.split(" ");
    let movieLang = document.getElementById("requestLang").value.split(" ");
    let movieDesc = document.getElementById("requestDesc").value;
    let movieImg = document.getElementById("imageUrl").value;
    let movieRating = document.getElementById("requestrate").value;

    movies.push({
        id:movies.length+1,
        movie:movieName,
        genre:movieGenre,
        language:movieLang,
        description:movieDesc,
        url:movieImg,
        rating:parseInt(movieRating),
        viewCount:1
    })
console.log(movies)
    localStorage.setItem("movies",JSON.stringify(movies));
}

function toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
}