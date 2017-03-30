import axios from 'axios';

const API_KEY = "8e081a97ce3ce35b04ff7460e037fc27";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},gb`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
