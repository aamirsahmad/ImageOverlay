


function createCanvas(){

	var mainImage = document.getElementById("mainImageContainer");
	var saveLink = document.getElementById("saveLink");
	var canvas = document.getElementById("cnv");
	var context = canvas.getContext('2d');

	var mainImageY;
	var mainImageX;

	lassondeLogo = new Image();
	lassondeLogo.src = 'LassondeLogo.png';

	style = window.getComputedStyle(mainImage, false); //Get the updated style page
	src = style.getPropertyValue("background-image").slice(4,-1).replace(/"/g, ""); //Get background url and rid excess characters

	//Get X & Y positions of the background image
	mainImageY = parseInt(style.getPropertyValue("background-position-y"));
	mainImageX = parseInt(style.getPropertyValue("background-position-x"));

	goat = new Image();
	goat.src = src;
	canvas.width = 800;
	canvas.height = 600;

	//Draw images to canvas 
	//https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage

	//context.drawImage(goat, 50, 50, 700, 350, 0,0,300,300);
	context.drawImage(goat,mainImageX,mainImageY,goat.width, goat.height);
	context.drawImage(lassondeLogo,-50, canvas.height - 346);


    Console.log("Over here");
}	


function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

document.getElementById('saveButton').addEventListener('click', function() {
    downloadCanvas(this, 'canvas', 'test.png');
}, false);