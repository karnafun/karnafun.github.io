$(document).ready(function () {
  loadPicture();
});

function loadPicture() {
  var numOfPhotos = 192;
  var path = "images/";
  var res = "";
  for (var i = 1; i <= numOfPhotos; i++) {
    // var picture = getPictureString(path + i + ".jpg");
    let fullPath = path + i + ".jpg";
    res += `
    <div> 
      <img  class='image-grid__item image-grid__item-portrait' src="${fullPath}"  data-original="${fullPath}">
     </div>
       `;
      
  }
  $("#grid").html(res);
}

function getPictureString(fullPath) {
  var res =
    " <div class='col-lg-3 col-md-4 col-6'> <a href='" +
    fullPath +
    "' class='d-block mb-4 h-100 lightbox'> ";
  res +=
    " <img class='img-fluid img-thumbnail' src='" +
    fullPath +
    "' alt=''> </a> </div> ";
  return res;
}
