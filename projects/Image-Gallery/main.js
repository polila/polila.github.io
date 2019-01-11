var displayedImage = document.querySelector('.displayed-img');

var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');

var overlay = document.querySelector('.overlay');

var body = document.getElementById("body");
/* Looping through images */
function swap(e) {

	temp = displayedImage.src;

	displayedImage.src = e.target.src;
	
	e.target.src =  temp;

	body.style.backgroundImage = "url(" + displayedImage.src + ")";
}

function random() {

	displayedImage.src = thumbBar[Math.floor(Math.random() * thumbBar.length)].src; 
}

// Skip first image
for (let i = 1; i < 5; i++) {
	
	var img = "images/pic" + (i + 1).toString(10) + ".jpg";
	
	thumbBar.appendChild(document.createElement('img')).setAttribute("src", img);
}


thumbBar.onclick = function(event) {
	swap(event);
}


/* Wiring up the Darken/Lighten button */
var lighter = document.getElementById('light');
var darker = document.getElementById('dark');

lighter.onclick = function() {
	overlay.style.opacity = "0"; 
}

darker.onclick = function() {
	overlay.style.opacity = "0.9"; 
}