// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];

const notes = [];

keys.forEach(function(key) {

  notes.push(document.getElementById(key));
})

function random(x) {
  // rgb variation
  return Math.floor(Math.random() * x);
}
// Changes the color of the keys
const keyPlay = function(event) {
	event.target.style.backgroundColor = "grey";
}

const keyReturn = function(event) {
	event.target.style.backgroundColor = "";
}

// Event handler properties
function playNote(id) {
  document.getElementById(id).play();
}

let play = function(note) {

	note.onmousedown = function() {

    document.getElementById("body").style.backgroundColor = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';

		keyPlay(event);

    if (note.id === "c-key") {

      playNote("c_octave1_audio");

    } else if (note.id === "c-sharp-key") {

      playNote("c_octave1_sharp_audio");

    } else if (note.id === "e-key") {

      playNote("e_octave1_audio");

    } else if (note.id === "f-key") {

      playNote("f_octave1_audio");

    } else if (note.id === "f-sharp-key") {

      playNote("f_octave1_sharp_audio");

    } else if (note.id === "g-key") {

      playNote("g_octave1_audio");

    } else if (note.id === "g-sharp-key") {

      playNote("g_octave1_sharp_audio");

    } else if (note.id === "a-key") {

      playNote("a_octave1_audio");

    } else if (note.id === "a-sharp-key") {

      playNote("a_octave1_sharp_audio");

    } else if (note.id === "d-key") {

      playNote("d_octave1_audio");

    } else if (note.id === "d-sharp-key") {

      playNote("d_octave1_sharp_audio");

    } else if (note.id === "b-key") {

      playNote("b_octave1_audio");

    } else if (note.id === "high-c-key") {

      playNote("c_octave2_audio");
    }
	}

	note.onmouseup = function() {

		keyReturn(event);
	}
}

// Runs the array elements through the function
notes.forEach(play);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('col-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Anonymous event handler property and function for the progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;

  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;

  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  lastLyric.style.display = "inline-block";
  document.getElementById("letter-note-three").innerHTML = "G";
  document.getElementById("letter-note-four").innerHTML = "E";
  document.getElementById("letter-note-five").innerHTML = "C";
  document.getElementById("letter-note-six").innerHTML = "B";
}

nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById("letter-note-one").innerHTML = "F";
  document.getElementById("letter-note-two").innerHTML = "F";
  document.getElementById("letter-note-three").innerHTML = "E";
  document.getElementById("letter-note-four").innerHTML = "C";
  document.getElementById("letter-note-five").innerHTML = "D";
  document.getElementById("letter-note-six").innerHTML = "C";
  // Hide last lyrice to to start over from beginning
  lastLyric.style.display = "none";
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}
