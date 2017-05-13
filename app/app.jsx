var React    = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var {Router, Route, hashHistory, IndexRoute}=  require('react-router');
var $ = require('jquery');

//LOAD FOUNDATION
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
//LOAD APP STYLES
require('style-loader!css-loader!sass-loader!applicationStyles');
$(document).foundation();

ReactDOM.render(
	<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path="about" component={About}/>
				<Route path="examples" component={Examples}/>
				<IndexRoute component={Weather}/>
			</Route>
	</Router>,
	document.getElementById('app')
);
