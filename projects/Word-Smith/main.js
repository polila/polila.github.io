// Information to reach API
const url = "https://api.datamuse.com/words?";
const queryParamsRhyme = "rel_rhy=";

// Selecting page elements
const inputField = document.querySelector('#input-1');
const submit = document.querySelector('#submit-1');
const responseField = document.querySelector('#responseField-1');

// AJAX function
const getSuggestions = () => {

	const wordQuery = inputField.value;
	
	const endpoint = url + queryParamsRhyme + wordQuery;
	
	const xhr = new XMLHttpRequest();
	
	xhr.responseType = "json";
	
	xhr.onreadystatechange = () => {
	
		if (xhr.readyState === XMLHttpRequest.DONE) {
	
			renderResponseRhyme(xhr.response)
		}
	}
	
	xhr.open("GET", endpoint);
	
	xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
	
	event.preventDefault();
	
	while(responseField.firstChild){
	
		responseField.removeChild(responseField.firstChild);
	};
	
	getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

// Information to reach API
const queryParamsTopic = "rel_jjb=";
const additionalParams = "&topics=";

// Selecting page elements
const inputFieldTopic = document.querySelector('#input-3');
const topicField = document.querySelector('#topic');
const submitTopic = document.querySelector('#submit-2');
const responseFieldTopic = document.querySelector('#responseField-2');

// AJAX function
const getSuggestionsTopic = () => {

	const wordQuery = inputFieldTopic.value;

	const topicQuery = topicField.value;

	const endpoint = url + queryParamsTopic + wordQuery + additionalParams + topicQuery;

	const xhr = new XMLHttpRequest();

	xhr.responseType = "json";

	xhr.onreadystatechange = () => {

		if (xhr.readyState === XMLHttpRequest.DONE) {

			renderResponseTopic(xhr.response)
		}
	}
	
	xhr.open("GET", endpoint);
	
	xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestionsTopic = (event) => {

	event.preventDefault();

	while(responseFieldTopic.firstChild){
		responseFieldTopic.removeChild(responseFieldTopic.firstChild);
	};

	getSuggestionsTopic();
}

submitTopic.addEventListener('click', displaySuggestionsTopic);