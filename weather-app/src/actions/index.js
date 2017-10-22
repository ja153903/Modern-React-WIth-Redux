import axios from 'axios';

const API_KEY = 'b0ffc10707f65c51f7ee9f0575824cdd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// AJAX requests in redux is quite complicated at first
// To make AJAX requests with redux, we will the library axios
// Soley used to make requests on the browser.
//Create an action creator to fetch data

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // returns a promise called request

  // redux-promise resolves the promise for us!
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
