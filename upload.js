var OrientationNumber;

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
  	 var imageUrl = 'url(' + reader.result + ')';//Convert DataURL to url
    mainImage.style.backgroundImage = imageUrl;//Set background

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

    console.log("Orientation Number:" + OrientationNumber);


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

  }, false);

  if (file) {
    

    var binaryReader = new FileReader();
    binaryReader.readAsBinaryString(file);

    var photoOrientation;
    getOrientation(file, function(orientation){
       OrientationNumber = orientation;
    });

    reader.readAsDataURL(file); //Read in as DataURL
  }

}



//Ali Novin
//http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
function getOrientation(file, callback) {
  var reader = new FileReader();
  reader.onload = function(e) {

    var view = new DataView(e.target.result);
    if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
    var length = view.byteLength, offset = 2;
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;
        for (var i = 0; i < tags; i++)
          if (view.getUint16(offset + (i * 12), little) == 0x0112)
            return callback(view.getUint16(offset + (i * 12) + 8, little));
      }
      else if ((marker & 0xFF00) != 0xFF00) break;
      else offset += view.getUint16(offset, false);
    }
    return callback(-1);
  };
  reader.readAsArrayBuffer(file);
}


function scale(){
 
}