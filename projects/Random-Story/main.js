var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
	return Math.floor(Math.random() * array.length);
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = "Willy the Goblin\nBig Daddy\nFather Christmas";
var insertY = "the soup kitchen\nDisneyland\nthe White House";
var insertZ = "spontaneously combusted\nmelted into a puddle on the sidewalk\nturned into a slug and crawled away";

function generateName() {
	if (customName.value !== "") {
		return customName.value;
	} else {
		var nameArray = insertX.split("\n");
		return nameArray[randomValueFromArray(nameArray)];
	}
}
// A stone is a unit of weight equal to 14 pounds.It is commonly used in the British commonwealth when refering to the weight of a person.
function convertWeight(pounds) {
	return Math.round(pounds / 14);
}

function convertTemp(fahrenheit) {
	return Math.round((fahrenheit - 32) * (5 / 9));
}

function generateNoun() {
	var nouns = insertY.split("\n");
	return nouns[randomValueFromArray(nouns)];
}

function generateVerb() {
	var verbs = insertZ.split("\n");
	return verbs[randomValueFromArray(verbs)];
}

function generateRandomStory() {

	var storyArr = storyText.split(" ").join(" ").split(",").join(" ").split(" ");
	
	for (let i = 0; i < storyText.length; i++) {
		if (storyArr[i] === ":insertx:") {
			storyArr[i] = generateName();
		} else if (storyArr[i] === ":inserty:") {
			storyArr[i] = generateNoun();
		} else if (storyArr[i] === ":insertz:") {
			storyArr[i] = generateVerb();
		} else if (storyArr[i] === ":insertz:.") {
			storyArr[i] = generateVerb() + ".";
		} else {
			continue;
		}
	}

	if (document.getElementById("uk").checked) {

		for (let i = 0; i < storyText.length; i++) {
			if (storyArr[i] === "94") {
				console.log("temp");
				storyArr[i] = convertTemp(94).toString(10);
			} else if (storyArr[i] === "fahrenheit") {
				storyArr[i] = "celsius";
			} else if (storyArr[i] === "300") {
				storyArr[i] = convertWeight(300).toString(10);
			} else if (storyArr[i] === "pounds") {
				storyArr[i] = "stones";
			} else {
				continue;
			}
		}
	}

	return storyArr.join(" ");
}

randomize.onclick = function() {
  	
  	var elements = document.getElementsByClassName("story");
  	
  	var container = document.getElementsByClassName("story-container");

  	for (let i = 0; i < elements.length; i++) {
  		elements[i].textContent = generateRandomStory();
  		elements[i].style.visibility = "visible";
  		container[i].style.visibility = "visible";
  	}
}
