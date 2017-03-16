

function previewFile() {
	//https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
  var uploadedImage = document.getElementById("uploadedImg");
  var mainImage = document.getElementById("mainImageContainer");
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {

  	//console.log(reader.result);
	mainImage.style.backgroundImage = 'url(' + reader.result + ')';

  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}