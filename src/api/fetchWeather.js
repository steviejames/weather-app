import axios from 'axios'
const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "cbaff0653310439c4d10b227a4ddcfee";
const fetchWeather = async (query) => {
     const {data} = await axios.get(URL, {
          params: {
               q: query,
               units: "metrics",
               APPID: API_KEY
          }
     })
     return data
}

export default fetchWeather