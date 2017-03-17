


function createCanvas(){

	var mainImage = document.getElementById("mainImageContainer");
	var slider = document.getElementById("slider");
	//image.style.backgroundSize = slider.value + '%'; //Adjust the size of the image
	var saveLink = document.getElementById("saveLink");
	var canvas = document.getElementById("testCanvas");
	//var canvas = document.createElement("canvas");
	
	//Create canvas with specified width and height
	canvas.width = 800;
	canvas.height = 600;
	var context = canvas.getContext('2d');

	var mainImageX, mainImageY;
	var imageWidth, imageHeight;

	lassondeLogo = new Image();
	lassondeLogo.src = 'LassondeLogo.png';

	style = window.getComputedStyle(mainImage, false); //Get the updated style page
	src = style.getPropertyValue("background-image").slice(4,-1).replace(/"/g, ""); //Get background url and rid excess characters

	//Get X & Y positions of the background image
	mainImageY = parseInt(style.getPropertyValue("background-position-y"));
	mainImageX = parseInt(style.getPropertyValue("background-position-x"));

	//Get width and height of source image by saving it as an image first
	savedImage = new Image();
	savedImage.src = src;

	imageWidth = savedImage.width; //Original width of the image
	imageHeight = savedImage.height; //Original height of the image

	var sliderRatio = 100/slider.value; //The ratio of the slider (ranges from 0-200) with 100 = original size

	var scaleX = imageWidth*(sliderRatio); //scale the width of the image with accordance to the ratio
	var scaleY =  imageHeight*(sliderRatio); //scale the height of the image with accordance to the ratio

	console.log(mainImageX + ' x ' + mainImageY); //Print the coordinates of the mainImages x&y

	//Draw images to canvas 
	//https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage

	//Draw the scaled image to canvas
	context.drawImage(
	/*image   */	savedImage, 
	/*sx      */	-1*mainImageX,  
	/*sy      */	-1*mainImageY, 
	/*swidth  */	scaleX, 
	/*sHeight */	scaleY, 
	/*dx      */	0,
	/*dy      */	0,
	/*dWidth  */	canvas.width,		//These need to be a ratio with respect to the image height
	/*dHeight */	canvas.height 		//This one as well
	);

	//Draw overlay image on top of the canvas
	context.drawImage(lassondeLogo,-50, canvas.height - 346);

	//*******SAVING DISABLED JUST FOR EASE OF TESTING **************//

	//Save canvas URL to a link
	/*saveLink.href = canvas.toDataURL();
    saveLink.download = 'image.png';
    saveLink.click(); //Simulate a click on the link to initiate download in browser
    */

    //console.log("DONE"); 
}	

