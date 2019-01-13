var row = document.getElementById("container");

var numberOfDoors = document.getElementById("numberOfDoors").value;

var numberOfTries = 0;

const randomInt = (min, max) => {
	// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
	return Math.floor((Math.random() * (max - min)) + min);
}

function search(numberOfDoors) {

	var notFound = true;

	var key = randomInt(0, numberOfDoors);
	
	console.log(key);
	
	var arr = []

	var min = 0;
	var max = numberOfDoors - 1;

	for (let i = 0; i < numberOfDoors; i++) { 

		row.appendChild(document.createElement("img")).setAttribute("id", i);

		document.getElementById(i).src = "img/closed_door.png";

		arr[i] = document.getElementById(i).addEventListener("click", function() {
			if (i < key) {
				numberOfTries++;
				document.getElementById("counter").innerHTML = numberOfTries;
				for (let j = min; j <= i; j++) {
					document.getElementById(j).src = "img/not.png";
					min = i;
				}
			} else if (i > key) {
				numberOfTries++;
				document.getElementById("counter").innerHTML = numberOfTries;
				for (let j = i; j < numberOfDoors; j++) {
					document.getElementById(j).src = "img/not.png";
				}
			} else {
				numberOfTries++;
				document.getElementById(i).src = "img/astro.png";
				for (let j = min; j <= i - 1; j++) {
					document.getElementById(j).src = "img/not.png";
				}
				for (let j = i + 1; j < numberOfDoors; j++) {
					document.getElementById(j).src = "img/not.png";
				}
				document.getElementById("counter").innerHTML = numberOfTries; 
			}
		});
	}
}

function reset() {

	for (let i = 0; i < numberOfDoors; i++) {
		numberOfTries = 0;
		document.getElementById("counter").innerHTML = 0; 
		row.removeChild(document.getElementById(i));
	}
}

document.getElementById("reset-bttn").onclick = reset;

document.getElementById("submit-bttn").onclick = function() {

	numberOfDoors = document.getElementById("numberOfDoors").value;

	search(numberOfDoors);
}