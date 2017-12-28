const ManifestPlugin = require("webpack-manifest-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const fs = require("fs");
const path = require("path");

const env = require("./env");
const entries = require("./entries");
const loaders = require("./loaders");
const urls = require("./urls");
const devServer = require("./devserver.js");

const mainConfigPlugins = [
  // get all the views as HtmlWebpackPlugin instance
  // build css from scss import
  ...entries.VIEWS,
  loaders.extractSass
];
const staticSassConfigPlugins = [loaders.extractStaticSass];

// HMR
devServer.hot && mainConfigPlugins.push(
  new webpack.HotModuleReplacementPlugin()
);

if (!env.devMode) {
  // manifest for hashes
  mainConfigPlugins.push(
    new ManifestPlugin({
      fileName: "webpack-manifest.json"
    })
  );

  // clear dist folder
  env.clearDist &&
    mainConfigPlugins.push(
      new CleanWebpackPlugin(["dist"], {
        root: urls.BASE_URL,
        verbose: true,
        dry: false,
        exclude: ["dist/src/media/"]
      })
    );

  mainConfigPlugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  mainConfigPlugins.push(new webpack.optimize.ModuleConcatenationPlugin());
  mainConfigPlugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "src/vendor.[hash].js",
      minChunks(module) {
        return module.context && module.context.indexOf("node_modules") >= 0;
      }
    })
  );

  staticSassConfigPlugins.push(
    new ManifestPlugin({
      fileName: "statics-webpack-manifest.json"
    })
  );
}

const plugins = {
  mainConfigPlugins,
  staticSassConfigPlugins
};

module.exports = plugins;
