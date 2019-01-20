// Foursquare API Info
const clientId = 'BFYVDXY4MPNZWYQDCYPRP52F1HV0FSINNOSIXOGVKYLV5OXI';
const clientSecret = 'DHQXJOBRY3EIXYI213YTSTOFXH1FBKGZP2VAMG11RMVPIRQT';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
//
// APIXU Info
const apiKey = '8403fec3c61c4b428b0145310180501';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4"), $("#venue5")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4"), $("#weather5"), $("#weather6"), $("#weather7")];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}
  
var currentDate = yyyy + "" + mm + "" + dd;

// Add AJAX functions here:
const getVenues = async () => {

  const city = $input.val();

  const urlToFetch = `${url}${city}&limit=100&client_id=${clientId}&client_secret=${clientSecret}&v=${currentDate}`;

  try {
    
    const response = await fetch(urlToFetch);

    if (response.ok) {
      
      const jsonResponse = await response.json();

      const venues = jsonResponse.response.groups[0].items.map((item) => item.venue);

      var randomArr = [];

      for (let i = 0; i < 5; i++) {
        randomArr[i] = venues[Math.floor(Math.random() * 100)];
      }
      
      return randomArr;

    } else {

      throw new Error("Request failed!");
    }
  } catch (error) {

    console.log(error);
  }
};

const getForecast = async () => {

  const urlToFetch = `${forecastUrl}${apiKey}&q=${$input.val()}&days=7&hour=${today.getHours()}`; 
  
  try {
    
    const response = await fetch(urlToFetch);
    
    if (response.ok) {
      
      const jsonResponse = await response.json();
      
      const days = jsonResponse.forecast.forecastday;

      return days;
    }
  } catch (error) {

    console.log(error);
  }
}

// Render functions
const renderVenues = (venues) => {

  $venueDivs.forEach(($venue, index) => {

    const venue = venues[index];

    const venueIcon = venue.categories[0].icon;

    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;

    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);

    $venue.append(venueContent);
  });

  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (days) => {

  $weatherDivs.forEach(($day, index) => {

    const currentDay = days[index];

    let weatherContent = createWeatherHTML(currentDay);

    $day.append(weatherContent);
  });
}

const executeSearch = () => {

  $venueDivs.forEach(venue => venue.empty());
  
  $weatherDivs.forEach(day => day.empty());
  
  $destination.empty();
  
  $container.css("visibility", "visible");
  
  getVenues().then((venues) => {
  
    return renderVenues(venues);
  });
  
  getForecast().then((forecast) => {

    return renderForecast(forecast);
  });
  
  return false;
}

$submit.click(executeSearch)
