
function checkUser()
{
    let currentUser = JSON.parse(localStorage.getItem("current_user"));
    if(currentUser == undefined)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function logout()
{
    localStorage.removeItem("current_user");
    window.location.assign("./index.html");
}