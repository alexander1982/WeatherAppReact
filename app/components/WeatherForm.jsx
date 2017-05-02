const React = require('react');

const WeatherForm = React.createClass({
	                                     onFormSubmit(e){
		                                     e.preventDefault();
		                                     var location = this.refs.location.value;

		                                     if(location.length > 0){
			                                     this.refs.location.value = '';
			                                     location = location.replace(/[$-/:-?{-~!"^_`\[\]]/g, ' ');
			                                     var CapitalizedLocation = location.replace(/\w\S*/g, function(txt) {
				                                     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			                                     });

			                                     this.props.onSearch(CapitalizedLocation);
		                                     }
	                                     },
	
	                                     render() {
		                                     return (
			                                     <div>
				                                     <form onSubmit={this.onFormSubmit}>
					                                     <input type="text" ref="location"/>
					                                     <button>Get Weather</button>
				                                     </form>
			                                     </div>
		                                     )
	                                     }
                                     });

module.exports = WeatherForm;