// 
let q = document.getElementById('ask');

let image = document.getElementById('img');

let text = document.getElementById('text');


let answer = function(event) {
  image.src = "img/2.png";       // load the image
  q.innerHTML = '<a href="https://en.wikipedia.org/wiki/VIX" style="color: #00A86B" target="_blank">Short the VIX!</a>';
}

ask.onclick = answer;
