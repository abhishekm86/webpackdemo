const path = require('path');
var webpack_config = {
	// set the mode, development | production | none
	mode: "development",
	// define entry point
	entry: "./src/script_main.js",

	// define output point
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js",		
	},
};

module.exports = webpack_config;