let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let OpenWeatherMap = require('OpenWeatherMap');
let createReactClass = require('create-react-class');
let PropTypes = require('prop-types');

let Weather = createReactClass({
	                               getInitialState() {
		                               return {
			                               isLoading: false
		                               }
	                               },
	                               handleSearch(location) {
		                               let that = this;

		                               that.setState({ isLoading: true });

		                               OpenWeatherMap.getTemp(location).then((res) => {
			                               that.setState({
				                                             locationName: res.locationName,
				                                             temp        : res.temp,
				                                             isLoading   : false
			                                             });
		                               }, (errorMessage) => {
			                               that.setState({ isLoading: false });
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

Weather.PropTypes = {
	locationName: PropTypes.string,
	temp        : PropTypes.string,
	isLoading   : PropTypes.bool
};

module.exports = Weather;