let React = require('react');
let createReactClass = require('create-react-class');

let WeatherForm = createReactClass({
	                                   CapitalizedLocation(location){
		                                   location = location.replace(/[$-/:-?{-~!"^_`\[\]]/g, ' ');
		                                   return location.replace(/\w\S*/g, function(txt) {
			                                   return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		                                   });

	                                   },
	                                   onFormSubmit(e){
		                                   e.preventDefault();
		                                   var location = this.refs.location.value;

		                                   if(location.length > 0){
			                                   this.refs.location.value = '';
			                                   location = this.CapitalizedLocation(location);
			                                   this.props.onSearch(location);
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