let doorImage1 = document.getElementById('door1');

let doorImage2 = document.getElementById('door2');

let doorImage3 = document.getElementById('door3');

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

const spaceDoorPath  = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let startButton = document.getElementById('bttn');

let score = 0;
let record = 0;

let currentStreak = document.getElementById('score-num');
currentStreak.innerHTML = score;

let streak = document.getElementById('streak-num');
streak.innerHTML = record;

// [0, 3)
let numClosedDoors = 3;

let openDoor1, openDoor2, openDoor3;

let currentlyPlaying = true;

const randomInt = (min, max) => {
	// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
	return Math.floor((Math.random() * (max - min)) + min);
}

const randomChoreDoorGenerator = () => {
	const choreDoor = randomInt(0, numClosedDoors);
	// 3! = 3 x 2 x 1 = 6 possible combinations
	if (choreDoor === 0) {
		openDoor1 = botDoorPath;
		if (randomInt(0, 2) === 1) {
			openDoor2 = beachDoorPath;
			openDoor3 = spaceDoorPath;
		} else {
			openDoor3 = beachDoorPath;
			openDoor2 = spaceDoorPath;
		}
	} else if (choreDoor === 1) {
		openDoor2 = botDoorPath;
		if (randomInt(0, 2) === 1) {
			openDoor1 = beachDoorPath;
			openDoor3 = spaceDoorPath;
		} else {
			openDoor3 = beachDoorPath;
			openDoor1 = spaceDoorPath;
		}
	} else {
		openDoor3 = botDoorPath;		
		if (randomInt(0, 2) === 1) {
			openDoor1 = beachDoorPath;
			openDoor2 = spaceDoorPath;
		} else {
			openDoor2 = beachDoorPath;
			openDoor1 = spaceDoorPath;
		}
	}
}

doorImage1.onclick = () => {
	if (!isClicked(doorImage1) && currentlyPlaying) {
		doorImage1.src = openDoor1;
		playDoor(doorImage1);
	}
}

doorImage2.onclick = () => {
	if (!isClicked(doorImage2) && currentlyPlaying) {
		doorImage2.src = openDoor2;
		playDoor(doorImage2);
	}
}

doorImage3.onclick = () => {
	if (!isClicked(doorImage3) && currentlyPlaying) {
		doorImage3.src = openDoor3;
		playDoor(doorImage3);
	}
}

startButton.onclick = () => {
	startRound();
}


const startRound = () => {
	doorImage1.src = closedDoorPath;
	doorImage2.src = closedDoorPath;
	doorImage3.src = closedDoorPath;
	numClosedDoors = 3;
	startButton.innerHTML = "Good luck!"
	currentlyPlaying = true;
	randomChoreDoorGenerator();
}

const getScore = () => {
	score += 1;
	currentStreak.innerHTML = score;
	if (score > record) {
		record = score;
		streak.innerHTML = record
	}
}

const gameOver = (status) => {
	if (status === "win") {
		startButton.innerHTML = "You win! Play again?";
		getScore();
	} else {
		startButton.innerHTML = "Game over! Play again?"
		score = 0;
		currentStreak.innerHTML = score;
	}

	currentlyPlaying = false;
}

const isBot = (door) => {
	if (door.src === botDoorPath) {
		return true;
	} else {
		return false;
	}
}

const isClicked = (door) => {
	if (door.src === closedDoorPath) {
		return false;
	} else {
		return true;
	}
}

const playDoor = (door) => {
	numClosedDoors -= 1;
	if (numClosedDoors === 0) {
		gameOver("win");
	} else if (isBot(door)) {
		gameOver('lose');
	}
}

startRound();