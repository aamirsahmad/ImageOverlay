

function previewFile() {
	//https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
  var uploadedImage = document.getElementById("uploadedImg"); //Get uploaded Image
  var mainImage = document.getElementById("mainImageContainer");
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  //Load the image
  reader.addEventListener("load", function () {

  	 var imageUrl = 'url(' + reader.result + ')'; //Convert DataURL to url
     mainImage.style.backgroundImage = imageUrl;//Set background

  }, false);

  if (file) {
    reader.readAsDataURL(file); //Read in as DataURL
  }

}