


function createCanvas(){

	var mainImage = document.getElementById("mainImageContainer");
	var slider = document.getElementById("slider");
	//image.style.backgroundSize = slider.value + '%'; //Adjust the size of the image
	var saveLink = document.getElementById("saveLink");
	//var canvas = document.getElementById("testCanvas"); //Use this for testing locally
	var canvas = document.createElement("canvas");
	
	
	//Create canvas with specified width and height
	canvas.width = 1080;
	canvas.height = 1080;

	var context = canvas.getContext('2d');

	var mainImageX, mainImageY;
	var imageWidth, imageHeight;

	//Get computed styles (current values after resizing, not values on page load)
	style = window.getComputedStyle(mainImage, false); //Get the updated style page
	src = style.getPropertyValue("background-image").slice(4,-1).replace(/"/g, ""); //Get background url and rid excess characters

	//Get X & Y positions of the background image
	mainImageY = parseInt(style.getPropertyValue("background-position-y"));
	mainImageX = parseInt(style.getPropertyValue("background-position-x"));

	//Get width and height of source image by saving it as an image first
	savedImage = new Image();
	savedImage.src = src;

	//Get width and height of overlay image
	var currentOverlayImage = document.getElementById("overlayImage");
	CanvasOverlayImage = new Image();
	CanvasOverlayImage.src = currentOverlayImage.src;

	imageWidth = savedImage.width; //Original width of the image
	imageHeight = savedImage.height; //Original height of the image

	var sliderRatio = 100/slider.value; //The ratio of the slider (ranges from 0-400) with 100 = original size

	var scaleX = parseInt(imageWidth*(sliderRatio)); //scale the width of the image with accordance to the ratio
	var scaleY =  parseInt(imageHeight*(sliderRatio)); //scale the height of the image with accordance to the ratio

	//Draw images to canvas 
	//https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage

	//Scaling variables for proper aspect ratios
	var aspectRatioW = imageWidth/canvas.width;
	var aspectRatioH = imageHeight/canvas.height;
	var imageSizeRealWidth = (slider.value/100) * canvas.width;
	var imageSizeRealHeight = (slider.value/100) * imageHeight/aspectRatioW;

	//console.log(mainImageX + 'x' + mainImageY + ' W:' + imageWidth + ' H:' + imageHeight + ' ARW:' + aspectRatioW + ' ARH:' + aspectRatioH + ' Slide:' + slide.value);
	//console.log('newWidth:' + imageSizeRealWidth + ' newHeight: ' + imageSizeRealHeight );

	context.drawImage(
	/*image   */	savedImage, 
	/*sx      */	0,  
	/*sy      */	0, 
	/*swidth  */	imageWidth, 
	/*sHeight */	imageHeight, 
	/*dx      */	mainImageX,
	/*dy      */	mainImageY,
	/*dWidth  */	imageSizeRealWidth,		
	/*dHeight */	imageSizeRealHeight
	);


	//Place overlay image 20 px from left, and 20px from bottom
	context.drawImage(CanvasOverlayImage, 0, canvas.height - overlayImage.height);

	//Save canvas URL to a link
	//saveLink.href = canvas.toDataURL();
	saveLink.href = canvas.toDataURL('image/jpeg', 0.7);
   	saveLink.download = 'image';
    saveLink.click(); //Simulate a click on the link to initiate download in browser
    

    //console.log("DONE"); 
}	

