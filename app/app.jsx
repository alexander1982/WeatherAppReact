const React    = require('react');
const ReactDOM = require('react-dom');
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');
const {Router, Route, hashHistory, IndexRoute}=  require('react-router');

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
