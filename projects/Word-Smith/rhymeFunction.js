const numberOfWords = document.querySelector('#input-2');

// Formats response to look presentable on webpage
const renderResponseRhyme = (res) => {
  // Handles if res is falsey
  if (!res){
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if (!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }
  // Creates an empty array to contain the HTML strings
  let wordList = [];
  // Loops through the response and caps off at 100
  for (let i = 0; i < Math.min(res.length, numberOfWords.value); i++){
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // Joins the array of HTML strings into one string
  wordList = wordList.join("");

  // Manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return
}

// Renders response before it is modified
const renderRawResponse = (res) => {
  // Takes the first 10 words from res
  let trimmedResponse = res.slice(0, 10);
  // Manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}

