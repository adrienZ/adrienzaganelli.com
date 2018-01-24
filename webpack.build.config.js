var path = require('path');
var root = path.resolve(__dirname);
var webpack = require("webpack");


module.exports = {
    context: __dirname,
    node: {
        __filename: true
    },
    watch:false,
    entry: {
        src: ['babel-polyfill', "./app/src/js/main.js"]
    },
    output: {
        path: path.resolve(__dirname , "./app/dist/js"),
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(nodes_modules|bower_components)/,
                include:root,
                loader: "babel",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
