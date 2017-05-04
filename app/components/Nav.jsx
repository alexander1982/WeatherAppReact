let React = require('react');
let PropTypes = require('prop-types');
let {Link, IndexLink} = require('react-router');

let Nav = (props) => {
	return(
	<div>
		<h1>This is Navigation</h1>
		<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
		<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
		<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
	</div>
	)
};

Nav.PropTypes = {
	props: PropTypes.object
};

module.exports = Nav;