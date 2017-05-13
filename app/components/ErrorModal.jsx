let React = require('react');
let createReactClass = require('create-react-class');
let ReactDOM = require('react-dom');
let ReactDOMServer = require('react-dom/server');

let ErrorModal = createReactClass({
	                                  getDefaultProps(){
		                                  return {
			                                  title: 'Error'
		                                  }
	                                  },
	                                  propTypes: {
		                                  title  : React.PropTypes.string,
		                                  message: React.PropTypes.string.isRequired
	                                  },
	                                  componentDidMount(){
		                                  let { message, title } = this.props;
		                                  var modalMarkup = (
		                                  <div id="error-modal" className="tiny reveal text-center" data-reveal=''>
			                                  <h2 className="subheader">{title}</h2>
			                                  <p>{message}</p>
			                                  <p>
				                                  <button onClick={this.props.close()} className="button expanded hollow" data-close=''>
					                                  O.K.
				                                  </button>
			                                  </p>
		                                  </div>
		                                  );

		                                  var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		                                  $(ReactDOM.findDOMNode(this)).html($modal);

		                                  var modal = new Foundation.Reveal($('#error-modal'));
		                                  modal.open();
	                                  },
	                                  render(){
		                                  return (
		                                  <div></div>
		                                  )
	                                  }
                                  });
module.exports = ErrorModal;