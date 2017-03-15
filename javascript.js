

var title = document.getElementById("imgOverlayTitle");
var lightsOverlay = document.getElementById("overlay");
var sepiaOverlay = document.getElementById("sepiaOverlay");
var bwButton = document.getElementById("bwButton");
var removeButton = document.getElementById("remove");

function remove(){
	lightsOverlay.style.visibility = 'hidden';
	sepiaOverlay.style.visibility = 'hidden';
	bwButton.style.visibility = 'hidden';
}

function lights(){
	showHide(lightsOverlay);
}

function sepia(){
	showHide(sepiaOverlay);
}

function bw(){
	showHide(bwButton);
}

function changeTitle(){
	
	change(title, "CHANGED");
}



function changeText(title, text){
	title.innerHTML = text;
}

function showHide(img){
	if(img.style.visibility == 'visible'){
		img.style.visibility = 'hidden';
	}else{
		img.style.visibility = 'visible';
	}
}