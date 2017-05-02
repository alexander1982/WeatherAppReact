const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');

const Weather = React.createClass({
	                                 getInitialState() {
		                                 return {
			                                 isLoading: false
		                                 }
	                                 },
	                                 handleSearch(location) {
		                                 let that = this;
		                                 
		                                 that.setState({isLoading: true});

		                                 OpenWeatherMap.getTemp(location).then((res) => {
			                                 that.setState({
				                                               locationName: res.locationName,
				                                               temp        : res.temp,
				                                               isLoading   : false
			                                               });
		                                 }, (errorMessage) => {
			                                 that.setState({isLoading: false});
			                                 alert(errorMessage);
		                                 });
	                                 },
	                                 render() {
		                                 let { locationName, temp, isLoading } = this.state;

		                                 function renderMessage() {
			                                 if(isLoading){
				                                 return <h3>Fetching...</h3>
			                                 } else if(temp && locationName){
				                                 return <WeatherMessage locationName={locationName} temp={temp}/>;
			                                 }
		                                 }

		                                 return (
		                                 <div>
			                                 <WeatherForm onSearch={this.handleSearch}/>
			                                 {renderMessage()}
		                                 </div>
		                                 )
	                                 }
                                 });

module.exports = Weather;