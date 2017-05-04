var webpack = require('webpack');
var path = require('path');

//noinspection JSUnresolvedFunction
module.exports = {
	entry  : [
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	output : {
		path    : __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules      : [__dirname, 'node_modules'],
		alias     : {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			OpenWeatherMap: 'app/api/OpenWeatherMap.jsx'
		},
		extensions: ['.js', '.jsx']
	},
	module : {
		loaders: [
			{
				loader : 'babel-loader',
				query  : {presets: ['react', 'es2015', 'stage-3']},
				test   : /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
};