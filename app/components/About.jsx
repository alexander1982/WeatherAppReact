let React = require('react');

let About = (props) => {
	return (
		<div>
			<h1 className="text-center subheader">About the Webb App</h1>
			<div className="about-the-author">
				<div className="row">
					<div className="small-12 medium-4 columns">
						<div className="author-image">
							<img src="https://media.giphy.com/media/l0MYPsBLOYyFqSDte/giphy.gif"/>
						</div>
						<div className="author-social">
							<a href="#">
          <span className="fa-stack fa-lg facebook">
            <i className="fa fa-circle fa-stack-2x"/>
            <i className="fa fa-facebook fa-stack-1x fa-inverse"/>
          </span>
							</a>
							<a href="#">
          <span className="fa-stack fa-lg twitter">
            <i className="fa fa-circle fa-stack-2x"/>
            <i className="fa fa-twitter fa-stack-1x fa-inverse"/>
          </span>
							</a>
							<a href="#">
          <span className="fa-stack fa-lg linkedin">
            <i className="fa fa-circle fa-stack-2x"/>
            <i className="fa fa-linkedin fa-stack-1x fa-inverse"/>
          </span>
							</a>
						</div>
					</div>
					<div className="small-12 medium-8 columns">
						<h4 className="separator-left subheader">Weather App</h4>
						<blockquote>"<i>This is a weather application build with React, Webpack, Foundation,NodeJs and Open Weather Map API.I have build this application for you.Enjoy."</i></blockquote>
						<cite>
						<span>Best regards,</span>
						<br/>
						<i>Alex</i>
					</cite>
						<h4 className="subheader">Here are links to all the tools i used:</h4>

						<ul>
							<li>
								<a href="https://facebook.github.io/react" target="_blanc">React </a><span className="subheader">-This was the library I used.</span>
							</li>
							<li>
								<a href="https://webpack.github.io" target="_blanc">Webpack</a><span className="subheader">-I used Webpack to bundle all the modules to one bundle.js file.</span>
							</li>
							<li>
								<a href="http://foundation.zurb.com" target="_blanc">Foundation</a><span className="subheader">-This framework i used for styling the application.</span>
							</li>
							<li>
								<a href="https://nodejs.org/" target="_blanc">NodeJs</a><span className="subheader">-I use NodeJs to run the server.</span>
							</li>
							<li>
								<a href="https://openweathermap.org" target="_blanc">Open Weather Map</a><span className="subheader">-This API I used to get the weather forecast by city name.</span>
							</li>
						</ul>
						</div>
				</div>
			</div>
		</div>
	)
};

module.exports = About;