let clicker = document.getElementById('choose');

let wheel = document.getElementById('random');

let img = document.getElementById("img");

let shape = document.getElementById("shape");

let link = document.getElementById("wiki")

let t = document.getElementById("t");
let r = document.getElementById("r");
let e = document.getElementById("e");
let w = document.getElementById("w");
let a = document.getElementById("a");
let y = document.getElementById("y");

let count = 0;

img.style.display = "none";

function random(x) {
  // rgb variation
  return Math.floor(Math.random() * x);
}

let randomColor = function() {
  
  let x = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
  
  t.style.color = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
  r.style.color = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')'; 
  e.style.color = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')'; 
  w.style.color = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')'; 
  a.style.color = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';  
  y.style.color = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')'; 

  if (count > 4) {
  	count = 0;
  } 

  if (count === 0) {

  	shape.innerHTML = "Pentagon";
  	img.src = "img/pent.jpg";
  } else if (count === 1) {

  	shape.innerHTML = "Hexagon";
  	img.src = "img/hex.png";
  } else if (count === 2) {

	shape.innerHTML = "Heptagon";
  	img.src = "img/hept.png";
  } else if (count === 3) {

	shape.innerHTML = "Octagon";
  	img.src = "img/oct.jpg";
  } else {

  	shape.innerHTML = "Portfoliogon";
  	img.src = "img/invert.jpg";
  }

  count +=1;

  img.style.display = "block";

  event.target.style.backgroundColor = x;
  
  document.getElementById("container").style.backgroundColor = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')'; 
}

clicker.onclick = randomColor;

wheel.onwheel = randomColor;