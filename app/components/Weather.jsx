let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let OpenWeatherMap = require('OpenWeatherMap');
let ErrorModal = require('ErrorModal');
let createReactClass = require('create-react-class');
let PropTypes = require('prop-types');
let image = require('backgroundImage');

let Weather = createReactClass({
	                               getInitialState() {
		                               return {
			                               isLoading   : false,
			                               errorMessage: undefined
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
		                               }, (e) => {
			                               that.setState({
				                                             errorMessage: e.message,
				                                             isLoading   : false
			                                             });
		                               });
	                               },

	                               render() {
		                               let { locationName, temp, isLoading, errorMessage } = this.state;

		                               function renderMessage() {
			                               if(isLoading){
				                               return <h1 className="white-text text-center">Fetching...</h1>
			                               } else if(temp && locationName){
				                               return <WeatherMessage locationName={locationName} temp={temp}/>;
			                               }
		                               }

		                               function renderError() {
			                               if(typeof errorMessage === 'string'){
				                               return (
				                               <ErrorModal message={errorMessage}/>
				                               )
			                               }
		                               }

		                               return (
		                               <div>
			                               <h1 className="text-center page-title">Get The Weather</h1>
			                               <WeatherForm onSearch={this.handleSearch}/>
			                               {renderMessage()}
			                               {renderError()}
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