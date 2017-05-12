let React = require('react');

let About = (props) => {
	return (
		<div className="white-text">
			<h1 className="text-center page-title">About the Webb App</h1>
			<div className="about-the-author">
				<div className="row">
					<div className="small-12 medium-4 columns">
						<div className="author-image">
							<img src="http://bestanimations.com/Earth&Space/Earth/earth-spinning-rotating-animation-24.gif"/>
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
						<h4 className="separator-left">Weather App</h4>
						<blockquote className="white-text">"<i>This is a weather application build with React, Webpack, Foundation,NodeJs and Open Weather Map API.I have build this application for you.Enjoy."</i></blockquote>
						<cite className="white-text">
						<span>Best regards,</span>
						<br/>
						<i className="white-text">Alex</i>
					</cite>
						<h4>Here are links to all the tools i used:</h4>

						<ul>
							<li>
								<a href="https://facebook.github.io/react" target="_blanc">React </a><span>-This was the library I used.</span>
							</li>
							<li>
								<a href="https://webpack.github.io" target="_blanc">Webpack</a><span>-I used Webpack to bundle all the modules to one bundle.js file.</span>
							</li>
							<li>
								<a href="http://foundation.zurb.com" target="_blanc">Foundation</a><span>-This framework i used for styling the application.</span>
							</li>
							<li>
								<a href="https://nodejs.org/" target="_blanc">NodeJs</a><span>-I use NodeJs to run the server.</span>
							</li>
							<li>
								<a href="https://openweathermap.org" target="_blanc">Open Weather Map</a><span>-This API I used to get the weather forecast by city name.</span>
							</li>
						</ul>
						</div>
				</div>
			</div>
		</div>
	)
};

module.exports = About;