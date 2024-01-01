function toggleEnlarged() {
    var image = document.getElementById("profileImage");
    var overlay = document.getElementById("overlay");

    if (image.classList.contains("enlarged")) {
        image.classList.remove("enlarged");
        overlay.style.display = "none";
    } else {
        image.classList.add("enlarged");
        overlay.style.display = "block";
    }
}

function showDiscordAlert() {
    alert("discord: liluzg");
}
