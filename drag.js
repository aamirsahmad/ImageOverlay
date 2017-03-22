

var image = document.getElementById("mainImageContainer"); //Reference to the image
var slide = document.getElementById("slider");
var imageWidth ;
var imageHeight;
var xInitial,yInitial;
var imageTopInitial, imageLeftInitial;

var enableDrag = false;


window.onload = function() {
	
	//Initialize starting attributes of picture
	image.style.backgroundPositionX = '0px';
	image.style.backgroundPositionY = '0px';
	
	//image.addEventListener("mousedown", mouseDownEvent);
	//slide.addEventListener("mousedown", function(){return true});
	
	document.onmousedown = mouseDownEvent;
	document.onmousemove = mouseMoveEvent;
	document.onmouseup = mouseReleaseEvent;

}

//Determine what happens when the mouse clicked
function mouseDownEvent(e){
	//console.log("Mouse down");
	//Store initial mouse location 
	//Check if we are dragging inside the draggable area (includes the image that is overlayed)
	if(e.target.id == "slider"){
		return true;
	}

	if(e.target.id == "mainImageContainer" || e.target.id == "overlayImage"){
		yInitial = e.clientY;
		xInitial = e.clientX;
		//Store initial image location
		imageTopInitial = parseInt(image.style.backgroundPositionY);
		imageLeftInitial = parseInt(image.style.backgroundPositionX);

		enableDrag = true;
		return false;
	}else{
		//Otherwise if we arent in the draggable area handle it with the browser normally
		return true;
	}
}

//Determine what happens when the mouse is moving
function mouseMoveEvent(e){

	//If drag is enabled, move the image as the cursor moves
	if(enableDrag){
		var deltaY = e.clientY - yInitial;//Calculate the change in y coordinates
		var deltaX = e.clientX - xInitial;//Calculate the change in x coordinates
		image.style.backgroundPositionY = imageTopInitial + deltaY  + 'px'; //Set the new image Y coordinate
		image.style.backgroundPositionX = imageLeftInitial + deltaX  + 'px';//Set the new image X coordinate
	}
	
}

//Determine what happens when the mouse button is released
function mouseReleaseEvent(e){
	//console.log("Mouse released")
	enableDrag = false;
	return true;
}
