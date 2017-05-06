let React = require('react');
let {Link}  = require('react-router');

let Examples = (props) => {
	return(
		<div>
			<h1 className="text-center">Examples</h1>
			<p>here are the few example locations to try out:</p>
			<ol>
				<li>
					<Link to="/?location=Philadelphia">Philadelphia</Link>
				</li>
				<li>
					<Link to="/?location=RioDeJaneiro">Rio</Link>
				</li>
			</ol>
		</div>
	)
};

module.exports =  Examples;