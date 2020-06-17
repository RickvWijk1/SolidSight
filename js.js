let preferencesTab = 0;

function next() {
    preferencesTab++;
    if (preferencesTab == 1) {
        document.getElementById("preferences1").style.display = "none";
        document.getElementById("preferences2").style.display = "block";
        document.getElementById("welcome").style.background = "white";
        document.getElementById("interests").style.background = "#FAFAFA";
    }
    if (preferencesTab == 2) {
        document.getElementById("preferences2").style.display = "none";
        document.getElementById("preferences3").style.display = "block";
        document.getElementById("interests").style.background = "white";
        document.getElementById("autoadjust").style.background = "#FAFAFA";
    }
    if (preferencesTab == 3) {
        document.getElementById("preferences3").style.display = "none";
        document.getElementById("preferences4").style.display = "block";
        document.getElementById("autoadjust").style.background = "white";
        document.getElementById("notifications").style.background = "#FAFAFA";
        document.getElementById("next").innerHTML = "<i class='fas fa-check'></i>"
    }
    if (preferencesTab == 4) {
        window.open("https://i404489.hera.fhict.nl");
    }
}

function gotoWelcome() {
    preferencesTab = 0;
    document.getElementById("preferences1").style.display = "block";
    document.getElementById("preferences2").style.display = "none";
    document.getElementById("preferences3").style.display = "none";
    document.getElementById("preferences4").style.display = "none";
    document.getElementById("welcome").style.background = "#FAFAFA";
    document.getElementById("interests").style.background = "white";
    document.getElementById("autoadjust").style.background = "white";
    document.getElementById("notifications").style.background = "white";
    document.getElementById("next").innerHTML = "<i class='fas fa-arrow-right'></i>"

}

function gotoInterests() {
    preferencesTab = 1;
    document.getElementById("preferences1").style.display = "none";
    document.getElementById("preferences2").style.display = "block";
    document.getElementById("preferences3").style.display = "none";
    document.getElementById("preferences4").style.display = "none";
    document.getElementById("welcome").style.background = "white";
    document.getElementById("interests").style.background = "#FAFAFA";
    document.getElementById("autoadjust").style.background = "white";
    document.getElementById("notifications").style.background = "white";
    document.getElementById("next").innerHTML = "<i class='fas fa-arrow-right'></i>"

}

function gotoAutoadjust() {
    preferencesTab = 2;
    document.getElementById("preferences1").style.display = "none";
    document.getElementById("preferences2").style.display = "none";
    document.getElementById("preferences3").style.display = "block";
    document.getElementById("preferences4").style.display = "none";
    document.getElementById("welcome").style.background = "white";
    document.getElementById("interests").style.background = "white";
    document.getElementById("autoadjust").style.background = "#FAFAFA";
    document.getElementById("notifications").style.background = "white";
    document.getElementById("next").innerHTML = "<i class='fas fa-arrow-right'></i>"

}

function gotoNotifications() {
    preferencesTab = 3;
    document.getElementById("preferences1").style.display = "none";
    document.getElementById("preferences2").style.display = "none";
    document.getElementById("preferences3").style.display = "none";
    document.getElementById("preferences4").style.display = "block";
    document.getElementById("welcome").style.background = "white";
    document.getElementById("interests").style.background = "white";
    document.getElementById("autoadjust").style.background = "white";
    document.getElementById("notifications").style.background = "#FAFAFA";
    document.getElementById("next").innerHTML = "<i class='fas fa-check'></i>"
}