
loadThumbnails("dummy1")
loadThumbnails("dummy2")
loadThumbnails("dummy3")
loadThumbnails("dummy1")
loadThumbnails("dummy2")
loadThumbnails("dummy3")

// Load movies
function loadThumbnails(film) {
    console.log("films: " + film);

    // Create actual image for thumbnail
    var pick = document.createElement("img")
    pick.setAttribute("src", "../Films/" + film + "/img.jpg");
    
    // div for enier thumbnail
    var thumbnail = document.createElement("div");
    thumbnail.id = film;
    thumbnail.href = film;
    thumbnail.className = "thumnail";

    // Add elements to div and div to p and p to body
    thumbnail.appendChild(pick);
    document.getElementById("movies").appendChild(thumbnail);

    thumbnail.onclick = function() {startFilm(film)};
}

function startFilm(film) {
    console.log("Running film: " + film)
    window.location = "#" + film;
}

