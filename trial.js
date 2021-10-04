var y = async function () {
    var n = await o("settings");
    var e = await o("subscriptionstatus");
    if (e == "active") {
        var s = 0
    } 
    n["actionsLimit"] = s;
    await a({
        settings: n
    });
    if (s == 0) {
        document.getElementsByClassName("freeversion")[0].style.display = "none";
        document.getElementsByClassName("freeversion")[1].style.display = "none";
        document.getElementsByClassName("freeversion")[2].style.display = "none";
        document.getElementsByClassName("startfalse")[0].style.display = "none";
        document.getElementsByClassName("startfalse")[1].style.display = "none";
        document.getElementsByClassName("startfalse")[2].style.display = "none";
        document.getElementsByClassName("starttrue")[0].style.display = "block";
        document.getElementsByClassName("starttrue")[1].style.display = "block";
        document.getElementsByClassName("starttrue")[2].style.display = "block";
        u()
    } else {
        document.getElementsByClassName("freeversion")[0].style.display = "block";
        document.getElementsByClassName("freeversion")[1].style.display = "block";
        document.getElementsByClassName("freeversion")[2].style.display = "block";
       
        document.getElementsByClassName("dailyactions")[0].textContent = (e[t] != undefined ? e[t] : "0") + "/" + s;
        document.getElementsByClassName("dailyactions")[1].textContent = (e[t] != undefined ? e[t] : "0") + "/" + s;
        document.getElementsByClassName("dailyactions")[2].textContent = (e[t] != undefined ? e[t] : "0") + "/" + s;
        if (e[t] != undefined && e[t] >= n["actionsLimit"]) {
            document.getElementsByClassName("startfalse")[0].style.display = "block";
            document.getElementsByClassName("startfalse")[1].style.display = "block";
            document.getElementsByClassName("startfalse")[2].style.display = "block";
            document.getElementsByClassName("starttrue")[0].style.display = "none";
            document.getElementsByClassName("starttrue")[1].style.display = "none";
            document.getElementsByClassName("starttrue")[2].style.display = "none";
            document.getElementsByClassName("startfalse")[0].getElementsByTagName("p")[0].textContent = "Daily actions limit reached - upgrade for unlimited";
            document.getElementsByClassName("startfalse")[1].getElementsByTagName("p")[0].textContent = "Daily actions limit reached - upgrade for unlimited";
            document.getElementsByClassName("startfalse")[2].getElementsByTagName("p")[0].textContent = "Daily actions limit reached - upgrade for unlimited"
        } else {
            u()
        }
    }
};
