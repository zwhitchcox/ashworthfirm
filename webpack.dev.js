const path              = require('path')
const webpack           = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	devtools: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		'index.js',
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin(),
	],
	resolve: ['','scss','css','js'],
	module: {
		loaders: [
			{
				test:    /\.js$/,
				loaders: ['babel'],
				exclude:/( node_modules)/,
			},
			{
				test: /\.(scss|css)$/,
				loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				loaders: 'url-loader?limit=1000',
			},
		],
	},
}

