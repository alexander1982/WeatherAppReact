let React = require('react');
let createReactClass = require('create-react-class');

let ErrorModal = createReactClass({
	getDefaultProps(){
		return {
			title: 'Error'
		}
	},
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	
	                                  componentDidMount(){
		                                  var modal = new Foundation.Reveal($('#error-modal'));
		                                  modal.open();
	                                  },
	                                  render(){
		                                  
		                                  let {message, title} = this.props;
		                                  
		                                  return (
		                                  <div id="error-modal" className="tiny reveal text-center" data-reveal=''>
			                                  <h2 className="subheader">{title}</h2>
			                                  <p>{message}</p>
			                                  <p>
				                                  <button className="button expanded hollow" data-close=''>
					                                  O.K.
				                                  </button>
			                                  </p>
		                                  </div>
		                                  )
	                                  }
                                  })
;

module.exports = ErrorModal;