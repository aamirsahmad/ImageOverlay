

function previewFile() {
  //Taken from:
	//https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
  var uploadedImage = document.getElementById("uploadedImg"); //Get uploaded Image
  var mainImage = document.getElementById("mainImageContainer");
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  //Load the image
  reader.addEventListener("load", function () {

    //Load image into background
  	 var imageUrl = 'url(' + reader.result + ')'; //Convert DataURL to url
     mainImage.style.backgroundImage = imageUrl;//Set background

    //Get image url so we can compute sizing ratios
    style = window.getComputedStyle(mainImage, false); //Get the updated style page
    src = style.getPropertyValue("background-image").slice(4,-1).replace(/"/g, ""); //Get background url and rid excess characters

    //Get the original size of the image
    savedImage = new Image();
    savedImage.src = src;

    imageWidth = savedImage.width;
    imageHeight = savedImage.height;
    console.log(imageHeight);
    //Set to 50% size of container
    
    //Center the image vertically and horizontally
    horizontalScaleRatio = 2160/imageWidth;
    imagePositionX = -1*(1080/2);
    imagePositionY = -1*(horizontalScaleRatio*imageHeight - 1080)/2; 

    //Ensure the image always fills the screen
    if(imageHeight*horizontalScaleRatio < 1080){
      //If the image is not high enough to fill the screen, adjust accordingly
      slider.value = (1080/imageHeight) * 200;
      imagePositionY = 0;
    }else{
      //Default to 100% width of container
      slider.value = 200;
    }

    
  


    updateSlider();
    //Update position of background
    image.style.backgroundPositionX = imagePositionX + 'px';
    image.style.backgroundPositionY = imagePositionY + 'px';

  }, false);

  if (file) {
    reader.readAsDataURL(file); //Read in as DataURL
  }

}