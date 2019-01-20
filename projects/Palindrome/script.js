const body = document.getElementById("body");
const bttn1 = document.getElementById("bttn-1");
const inptValue = document.getElementById("isPalindrome");
const bttn2 = document.getElementById("bttn-2");
const inptValue2 = document.getElementById("getPalindrome");

function palindrome(str) {

  let arr = [];

  for (let i = 0; i < str.length; i++) {

        if ("A" <= str[i] && str[i] <= "Z") {

            arr.push(str[i].toLowerCase());

        } else if (("a" <= str[i] && str[i] <= "z") || (1 <= str[i] && str[i] <= 9)) {

            arr.push(str[i]);

        } else {

            continue;
        }
    }

    let min = 0;
    let max = arr.length - 1;
    let mid = Math.floor((min + max) / 2);

    if (str.length % 2 != 0) {
        // i.e., 26 x 26 x 1 if odd
        while (min < mid) {
            if (arr[min] != arr[max]) {
                return false;
            }
            max--;
            min++;
        }
    } else {
        // i.e., 26 x 26 x 1 x 1 if even
        while (min < max) {
            if (arr[min] != arr[max]) {
                return false;
            }
            max--;
            min++;
        }
    }
    return true;
}

bttn1.onclick = function() {
	if (palindrome(inptValue.value)) {
		document.getElementById("output-1").appendChild(document.createElement("p")).innerHTML = "Palindrome!";
	} else {
		document.getElementById("output-1").appendChild(document.createElement("p")).innerHTML = "Not a palindrome!";
	}
}

function random(max) {
  var num = Math.floor(Math.random() * max);
  return num;
}

bttn2.onclick = function() {

	let arr = [];
	
	for (let i = 0; i <= 26; i++) {
		arr.push(String.fromCharCode(97 + i));
	}
	
	for (let j = 0; j <= 9; j++) {
		arr.push(j);
	}

	let strArr = new Array(inptValue2.value);

	let min = 0;
	let max = inptValue2.value;

	if (inptValue2.value % 2 == 0) {

		while (min < max) {
			strArr[min] = arr[random(arr.length)];
			strArr[max] = strArr[min];
			min++;
			max--;
		}
	} else {
			while (min <= max) {
			strArr[min] = arr[random(arr.length)];
			strArr[max] = strArr[min];
			min++;
			max--;
		}
	}

	let str = strArr.join("");

	document.getElementById("output-2").appendChild(document.createElement("p")).innerHTML = str;

	document.getElementById("canvas").style.display = "inline-flex";

	function loop() {
		body.style.backgroundColor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
		requestAnimationFrame(loop);
	}
	loop();
}

let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 150;
const particles = [];

const possibleColors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Gold",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson"
];

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
  this.x = Math.random() * W; // x
  this.y = Math.random() * H - H; // y
  this.r = randomFromTo(11, 33); // radius
  this.d = Math.random() * maxConfettis + 11;
  this.color =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];
  this.tilt = Math.floor(Math.random() * 33) - 11;
  this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
  this.tiltAngle = 0;

  this.draw = function() {
    context.beginPath();
    context.lineWidth = this.r / 2;
    context.strokeStyle = this.color;
    context.moveTo(this.x + this.tilt + this.r / 3, this.y);
    context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
    return context.stroke();
  };
}

function Draw() {
  const results = [];

  // Magical recursive functional love
  requestAnimationFrame(Draw);

  context.clearRect(0, 0, W, window.innerHeight);

  for (var i = 0; i < maxConfettis; i++) {
    results.push(particles[i].draw());
  }

  let particle = {};
  let remainingFlakes = 0;
  for (var i = 0; i < maxConfettis; i++) {
    particle = particles[i];

    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
    particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

    if (particle.y <= H) remainingFlakes++;

    // If a confetti has fluttered out of view,
    // bring it back to above the viewport and let if re-fall.
    if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
      particle.x = Math.random() * W;
      particle.y = -30;
      particle.tilt = Math.floor(Math.random() * 10) - 20;
    }
  }

  return results;
}

window.addEventListener(
  "resize",
  function() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },
  false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
  particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
Draw();
