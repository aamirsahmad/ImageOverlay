

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

    var scaleHorizontal;
    var scaleVertical;

    //Determine wether the width or height is the scaling factor (ie a landscape photo would scale so the height fits)
    if(imageHeight < imageWidth){
      scaleHorizontal = false;
      scaleVertical = true;
    }else{
      scaleHorizontal = true;
      scaleVertical = false;
    }

    //Scale image so it always fills the screen
    if(scaleHorizontal){
      console.log("Scaling Horizontal");
      scale = 1080/imageWidth;
      slider.value = 100;
      imagePositionX = 0;
      imagePositionY = -1*((imageHeight*scale)-1080)/2;
    }else if(scaleVertical){
      //console.log("Scaling Vertically");
      scale = 1080/imageHeight;
      slider.value = 100*((imageWidth*scale)/1080);

      imagePositionX = -1*((imageWidth*scale)-1080)/2;
      imagePositionY = 0;
    }


   //console.log(imageWidth + 'X' + imageHeight + ' Slider: ' + slider.value);
    
    //Center the image vertically and horizontally
    horizontalScaleRatio = 1080/imageWidth;



    updateSlider();
    //Update position of background
    image.style.backgroundPositionX = imagePositionX + 'px';
    image.style.backgroundPositionY = imagePositionY + 'px';

  }, false);

  if (file) {
    reader.readAsDataURL(file); //Read in as DataURL
  }

}