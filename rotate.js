



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
      var oCanvas = document.getElementById("testCanvas"); //Use this for testing locally
      //var oCanvas = document.createElement("canvas");

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



    }