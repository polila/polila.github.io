const volumeOn = document.getElementById("music-on");

const volumeOff = document.getElementById("music-off");

const playBttn = document.getElementById("audio-player");

const turnUp = document.getElementById("taller");

volumeOn.onclick = function() {
	playBttn.muted = true;
	volumeOff.style.display = "block";
	volumeOn.style.display = "none";
}

volumeOff.onclick = function() {
	playBttn.muted = false;
	playBttn.volume = 1;
	volumeOn.style.display = "block";
	volumeOff.style.display = "none";
}

turnUp.onclick = function() {
	playBttn.muted = true;
	volumeOff.style.display = "block";
	volumeOn.style.display = "none";
}