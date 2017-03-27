

function rotateImage(){
    var mainImage = document.getElementById("mainImageContainer");


    //Get image url so we can compute sizing ratios
    style = window.getComputedStyle(mainImage, false); //Get the updated style page
    src = style.getPropertyValue("background-image").slice(4,-1).replace(/"/g, ""); //Get background url and rid excess characters

    //Get the original size of the image
    savedImage = new Image();
    savedImage.src = src;


    imageWidth = savedImage.width;
    imageHeight = savedImage.height;

    //*ORIENTATION FIXING*//
    //Should be consolidated into seperate function

   //orientVal.innerHTML = (OrientationNumber);
    //ROTATE 90 DEGREES CW

      console.log("Rotating");
      //Create the canvas for changing orientation
      //var oCanvas = document.getElementById("testCanvas"); //Use this for testing locally
      var oCanvas = document.createElement("canvas");

      oCanvas.width = imageHeight;
      oCanvas.height = imageWidth;

      var oContext = oCanvas.getContext("2d");
     
      oContext.rotate(0.5 * Math.PI); //Rotate Canvas 90 Degrees
      oContext.translate(0, -oCanvas.width); //Move back into position
      oContext.drawImage(savedImage, 0 ,0); //Update Canvas

      //Overwrite save image with the rotated image
      savedImage.src = oCanvas.toDataURL();
      //Update height and width variables
      imageWidth = savedImage.width;
      imageHeight = savedImage.height;

    var imageUrl = 'url(' + savedImage.src  + ')';//Convert DataURL to url
    mainImage.style.backgroundImage = imageUrl;//Set background

    //*****SCALING - Should be consolidated to a function! *******//
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

    }

