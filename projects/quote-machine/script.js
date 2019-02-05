let backgroundVideo = document.getElementById("background-video");

const VIDEOS = {
	original: document.getElementById("vid-1").src,
	remix: document.getElementById("vid-2").src
};

document.getElementById("audio").addEventListener("click", function() {
	if (backgroundVideo.src === VIDEOS["original"]) {
		backgroundVideo.src = VIDEOS["remix"];
		backgroundVideo.muted = false;
		document.getElementById("audio").style.color = "red";
	} else {
		backgroundVideo.src = VIDEOS["original"];
		backgroundVideo.muted = true;
		document.getElementById("audio").style.color = "yellow";
	}
});

function random(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getQuotes() {
	const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
	return fetch(url).then(function(response) {
		return response.json();
	}).then(function(jsonResponse) {
		return jsonResponse.quotes.map((quote) => {
			return {
				quote: quote.quote,
				author: quote.author
			};
		});
	});
}

function displayQuote() {
	getQuotes().then((x) => {
		let arr = [];
		for (let i in x) {
			let temp = [];
			temp.push(x[i].quote);
			temp.push(x[i].author);
			arr.push(temp);
		}
		let n = random(arr.length - 1, 0);
		let bio = `https://en.wikipedia.org/wiki/${arr[n][1].split(' ').join('_')}`;
		document.getElementById("quote-in").innerHTML = '\"' + arr[n][0] + '\"';
		document.getElementById("author-in").innerHTML = "<a href=\'" + bio + "\' target=\'_blank\'>" + "- " + arr[n][1] + "</a>";
	});
}

displayQuote();

document.getElementById("quote-bttn").addEventListener("click", displayQuote);