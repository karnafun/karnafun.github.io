function loadPicture(event) {
    var numOfPhotos = 192;
    var path = "images/";
    var res = "";
    for (var i = 1; i <= numOfPhotos; i++) {
        var picture = getPictureString(path + i + ".jpg");
        res += " " + picture;

    }
    document.getElementById("galleryRow").innerHTML = res;
    baguetteBox.run('.tz-gallery');
}

function getPictureString(fullPath) {
    var res = " <div class='col-lg-3 col-md-4 col-6'> <a href='" + fullPath + "' class='d-block mb-4 h-100 lightbox'> ";
    res += " <img class='img-fluid img-thumbnail' src='" + fullPath + "' alt=''> </a> </div> ";
    return res;
}