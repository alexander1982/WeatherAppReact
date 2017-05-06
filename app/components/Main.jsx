let React = require('react');
let Nav = require('Nav');

let Main = (props) => {
		return (
			<div>
				<Nav/>
				<div className="row">
					<div className="columns medium-12 large-12 small-centered">
						{props.children}
					</div>
				</div>
			</div>
		)
};

module.exports = Main;