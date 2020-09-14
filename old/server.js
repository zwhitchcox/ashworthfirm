'use strict'
const express = require('express'),
	webpack = require('webpack'),
	WebpackDevServer = require('webpack-dev-server'),
	config = require('./webpack.dev')

new WebpackDevServer(config, {

}).listen(3000, 'localhost', function (err) {
	console.log(err ? err: 'Listening http://localhost:3000')
})
