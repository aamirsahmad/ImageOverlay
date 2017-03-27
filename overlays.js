var overlayImage = document.getElementById("overlayImage");

//Add filenames for overlays here
var cloudOverlay = 'cloud-overlay.png';
var filter1Overlay = 'filter1.png';
var filter2Overlay = 'filter2.png';

//Add overlays to array

var overlays = [filter1Overlay, filter2Overlay, cloudOverlay ];

var position = 0;

//Go to the previous image overlay
function previousImage(){
	
	position--;

	if(position < 0){
		position = overlays.length -1;
	}

	overlayImage.src = overlays[position];
}

//Go to the next image overlay
function nextImage(){

	position++;

	if(position >= overlays.length){
		position = 0;
	}

	overlayImage.src = overlays[position];
}
