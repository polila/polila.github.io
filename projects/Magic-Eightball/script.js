// The Magic 8-Ball is a toy used for fortune-telling or seeking advice.
// The user asks a question to the large plastic ball, then turns it over to reveal a written answer which appears on the surface of the toy. 
// The user will be able to input a question, then our program will output a random fortune.

let post = document.getElementById("input");

let ask = document.getElementById("ask");

let ans = document.getElementById("answer");

function getAnswer() {

	let randomNumber = Math.floor( Math.random() * (7 - 0) ) + 0;

	switch (randomNumber) {
		case (randomNumber = 0):
			return  'It is certain';
			break;
		case (randomNumber = 1):
			return 'It is decidedly so';
			break;
		case (randomNumber = 2):
			return 'Reply hazy try again';
			break;
		case (randomNumber = 3):
			return 'Cannot predict now';
			break;
		case (randomNumber = 4):
			return 'Do not count on it';
			break;
		case (randomNumber = 5):
			return 'My sources say no';
			break;
		case (randomNumber = 6):
			return 'Outlook not so good';
			break;
		case (randomNumber = 7):
			return 'Signs point to yes';
			break;
		default:
			return 'I do not have an answer';
			break;
	}
}

post.value = "Ask me anything!";

ask.onclick = function() {
	document.getElementById("answer").innerHTML = getAnswer();
	ans.style.display = "block";
	ask.style.display = "none";
	post.style.display = "none";
	repeat.style.display = "inline-block";
}
repeat.onclick = function() {
	repeat.style.display = "none";
	post.value = "Ask me anything!";
	post.style.display = "inline-block";
	ans.style.display = "none";
	ask.style.display = "inline-block";
}