

var image = document.getElementById("mainImageContainer");
var slider = document.getElementById("slider");
var sliderValue = document.getElementById("sliderVal");
var imageStyle;

function updateSlider(){

		sliderValue.innerHTML = parseInt(slider.value/400 * 100) + '%';//Update the value below the slider
		image.style.backgroundSize = slider.value + '%'; //Adjust the size of the image
		
		
}



/*


*/