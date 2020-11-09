
function checkUser()
{
    let currentUser = JSON.parse(localStorage.getItem("current_user"));
    if(currentUser == undefined)
    {
        return 0;
    }
    else if(currentUser.email == "admin@gmail.com")
    {
        return 2;
    }
    else
    {
        return 1;
    }
}

function logout()
{
    localStorage.removeItem("current_user");
    window.location.assign("./index.html");
}

function getMovieFromLocalStorage(msg) {
    let moviesInLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if (moviesInLocalStorage == undefined) {
        iziToast.warning({
            message: msg,
            position: "topRight"
        })
    }
    moviesInLocalStorage = JSON.parse("[{\r\n  \"id\":1,\r\n  \"movie\" : \"Anniyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"suspense\", \"thriller\"],\r\n  \"rating\" : 4,\r\n  \"language\" : [\"tamil\"],\r\n  \"date\" : 1604852551\r\n},\r\n{\r\n  \"id\":2,\r\n  \"movie\" : \"Banyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"comedy\"],\r\n  \"rating\" : 2,\r\n  \"language\" : [\"tamil\"],\r\n  \"date\" : 1604852531\r\n},\r\n{\r\n  \"id\":3,\r\n  \"movie\" : \"Saniyan\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"suspense\"],\r\n  \"rating\" : 1,\r\n  \"language\" : [\"tamil\", \"english\"],\r\n  \"date\" : 1604852572\r\n},\r\n{\r\n  \"id\":4,\r\n  \"movie\" : \"jsdbfhbsd\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"horror\"],\r\n  \"rating\" : 4,\r\n  \"language\" : [\"tamil\", \"telugu\"],\r\n \"date\" : 1604852451\r\n},\r\n{\r\n  \"id\":5,\r\n  \"movie\" : \"Suriya\",\r\n  \"url\" : \"https:\/\/in.bmscdn.com\/iedb\/movies\/images\/mobile\/thumbnail\/large\/anniyan-et00002333-24-03-2017-16-17-18.jpg\",\r\n  \"genre\" : [\"thriller\"],\r\n  \"rating\" : 4,\r\n  \"language\" : [\"malayalam\", \"english\"],\r\n  \"date\" : 1604852431\r\n}]\r\n")
    return moviesInLocalStorage
}