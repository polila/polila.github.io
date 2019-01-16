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