let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=19644c126742959c279dc0ea446cd764&units=metric';

module.exports = {
	getTemp(location) {
		let responseData = {};

		let encodedLocation = encodeURIComponent(location);

		let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		
		return axios.get(requestUrl).then((res) => {
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				responseData.temp = res.data.main.temp;
				responseData.locationName = res.data.name;

				return responseData;
			}
		},(res) => {
			throw new Error('Cant find the location');
		});
	}
};