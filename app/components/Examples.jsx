let React = require('react');
let {Link}  = require('react-router');

let Examples = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<h3 className="text-center page-title">Just click on image to get the weather:</h3>
			<div className="menu-centered">
				<ul className="menu">
					<li>
						<Link to="/?location=Moscow">
							<img src="https://www.bestguides-spb.com/img/moscow.jpg"/>
						</Link>
					</li>
					<li>
						<Link to="/?location=RioDeJaneiro">
							<img src="https://therockhudsonproject.files.wordpress.com/2011/03/rio_geral.jpg"/>
						</Link>
					</li>
					<li>
						<Link to="/?location=Paris">
							<img src="http://www.planetware.com/photos-tiles/france-eiffel-tower.jpg"/>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
};

module.exports =  Examples;