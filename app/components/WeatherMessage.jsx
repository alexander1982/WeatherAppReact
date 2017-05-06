let React = require('react');

let WeatherMessage = ({ locationName, temp }) => {
	var resultMessage;

	if(locationName == '' && temp == ''){
		resultMessage = 'Type the location in search window and press the "Get Weather" button';
	} else {
		resultMessage = `Temperature in ${locationName} is ${temp}C`;
	}

	return (
	<div>
		<h1 className="text-center subheader">{resultMessage}</h1>
	</div>
	)
};

module.exports = WeatherMessage;