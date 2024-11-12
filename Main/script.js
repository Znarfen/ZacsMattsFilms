
loadThumbnails("dummy1", "action")
loadThumbnails("dummy1", "action")
loadThumbnails("dummy1", "action")
loadThumbnails("dummy1", "action")
loadThumbnails("dummy1", "action")
loadThumbnails("dummy1", "action")

loadThumbnails("dummy2", "comedy")
loadThumbnails("dummy2", "comedy")
loadThumbnails("dummy2", "comedy")
loadThumbnails("dummy2", "comedy")
loadThumbnails("dummy2", "comedy")
loadThumbnails("dummy2", "comedy")
loadThumbnails("dummy2", "comedy")
loadThumbnails("dummy2", "comedy")
loadThumbnails("dummy2", "comedy")

loadThumbnails("dummy3", "fantasy")
loadThumbnails("dummy3", "fantasy")
loadThumbnails("dummy3", "fantasy")
loadThumbnails("dummy3", "fantasy")
loadThumbnails("dummy3", "fantasy")




// Load movies
function loadThumbnails(film, genre) {
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
    document.getElementById(genre).appendChild(thumbnail);

    thumbnail.onclick = function() {startFilm(film)};
}

function startFilm(film) {
    console.log("Running film: " + film)
    window.location = "#" + film;
}

