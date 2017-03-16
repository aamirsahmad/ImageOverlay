


function createCanvas(){

	var mainImage = document.getElementById("mainImageContainer");
	var canvas = document.getElementById("cnv");
	var context = canvas.getContext('2d');

	var mainImageY;
	var mainImageX;

	lassondeLogo = new Image();
	lassondeLogo.src = 'LassondeLogo.png';

	 
	style = window.getComputedStyle(mainImage, false); //Get the updated style page
	src = style.getPropertyValue("background-image").slice(4,-1).replace(/"/g, ""); //Get background url and rid excess characters

	console.log(style.getPropertyValue("background-position-x"));

	//Get X & Y positions of the background image
	mainImageY = parseInt(style.getPropertyValue("background-position-y"));
	mainImageX = parseInt(style.getPropertyValue("background-position-x"));

	console.log(mainImageY);

	goat = new Image();
	goat.src = src;
	canvas.width = goat.width;
	canvas.height = goat.height;

	//Draw images to canvas
	context.drawImage(goat,mainImageX,mainImageY,goat.width, goat.height);
	context.drawImage(lassondeLogo,-50,canvas.height - 350,lassondeLogo.height,lassondeLogo.width);

	console.log("drawn");

}	


