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
			                                   <h1 className="subheader text-center">Get The Weather</h1>
			                                   <div className="row text-center">
				                                   <div className="small-centered small-12 large-centered large-6 medium-centered medium-8 columns">
					                                   <form className="callout text-center" onSubmit={this.onFormSubmit}>
						                                   <div className="floated-label-wrapper">
							                                   <input type="text" ref="location"/>
						                                   </div>
						                                   <button className="button expanded hollow">Get Weather</button>
					                                   </form>
				                                   </div>
			                                   </div>
		                                   </div>
		                                   )
	                                   }
                                   });


module.exports = WeatherForm;