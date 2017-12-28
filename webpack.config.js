// =======================================================================//
// !  DEPENDENCIES                                                        //
// =======================================================================//
const path = require('path');
const webpack = require('webpack');

// =======================================================================//
// !  CONFIG			                                                        //
// =======================================================================//
const urls = require('./config/urls');
const entries = require('./config/entries');
const loaders = require('./config/loaders');
const env = require('./config/env');
const plugins = require('./config/plugins');
const devServer = require('./config/devserver.js');

const mainConfig = 	{
	name: 'MAIN CONFIG',
	devServer: devServer,
	entry: entries.SCRIPTS,
	resolve: {
		alias: urls.aliases
	},
	output: {
		path: path.resolve(urls.BASE_URL, './dist/'),
		// not at the root
		filename: env.devMode ? 'src/js/[name].js' : 'src/js/[name].[chunkhash:8].js'
	},
	devtool: env.devMode ? 'source-map' : false,
	module: {
		loaders: [
			loaders.eslint,
			loaders.js,
			loaders.sass,
			loaders.css,
		]
	},
	plugins: plugins.mainConfigPlugins
}



const staticSassConfig = {
	name: 'EXPORT STATIC SASS',
	entry: entries.STYLES,
	devServer: {},
	output: {
		path: path.resolve(urls.BASE_URL, './dist/'),
		// not at the root
		filename: env.devMode ? 'src/css/[name].js' : 'src/css/[name].[chunkhash:8].js'
	},
	devtool: env.devMode ? 'source-map' : false,
	module: {
		loaders: [
			loaders.staticSass,
		]
	},
	plugins: plugins.staticSassConfigPlugins
}

// static sass is available, prefer import style in main.js
let config = [
	mainConfig,
	// staticSassConfig
]
module.exports = config;
