let doorObj = document.getElementById("door");

let lockDoor = document.getElementById("lock-sign");

let unlockDoor = document.getElementById("unlock-sign");

let doorStatus = document.getElementById("door-status");

let image = document.getElementById("img");

image.hidden = true;

let openDoor = function() {
  doorObj.hidden = true;
  image.hidden = false;
}

let closeDoor = function() {
  doorObj.hidden = false;
  image.hidden = true;
}

unlockDoor.onclick = function() {
  doorStatus.innerHTML = "OPEN";
  unlockDoor.innerHTML = "UNLOCKED";
  unlockDoor.style.backgroundColor = "#2ECC40";
  lockDoor.style.backgroundColor = "lightgrey";
}

lockDoor.onclick = function() {
  doorStatus.innerHTML = "CLOSED";
  lockDoor.innerHTML = "LOCKED";
  lockDoor.style.backgroundColor = "#85144b";
  unlockDoor.style.backgroundColor = "lightgrey";
}

unlockDoor.addEventListener("click", function(){
  doorObj.addEventListener("click", openDoor);
  image.addEventListener("click", closeDoor);
})

lockDoor.addEventListener("click", function(){
  doorObj.removeEventListener("click", openDoor);
})
