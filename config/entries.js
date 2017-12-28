const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const urls = require("./urls");
const env = require("./env");
const devServer = require("./devserver");

// =======================================================================//
// !  CONFIG ENTRIES / SCRIPTS / BUNDLES                                  //
// =======================================================================//
let SCRIPTS = {};
fs
  .readdirSync(urls.APP_ASSETS_URL + "js")
  .filter(file => {
    // get all .js at the root of app/src/js
    return file.match(/.js/);
  })
  .map(path => {
    // all these files are now entries
    const bundle_name = path.replace(".js", "");
    SCRIPTS[`${bundle_name}_bundle`] = [`${urls.APP_ASSETS_URL}js/${path}`];
  });

// =======================================================================//
// !  CONFIG ENTRIES / STYLES / BUNDLES                                   //
// =======================================================================//
let STYLES = {};
fs
  .readdirSync(urls.APP_ASSETS_URL + "sass")
  .filter(file => {
    // get all .js at the root of app/src/js
    return file.match(/.scss/);
  })
  .map(path => {
    // all these files are now entries
    const stylesheet = path.replace(".scss", "") // + "-static";
    STYLES[`${stylesheet}`] = [`${urls.APP_ASSETS_URL}sass/${path}`];
  });

const ENTRIES = Object.assign(
  {
    // serverUrl: devServer.watchOptions.url,
    // hotReload: 'webpack/hot/dev-server'
  },
  SCRIPTS,
  STYLES
);

// =======================================================================//
// !  CONFIG VIEWS / HTML                                                 //
// =======================================================================//
const VIEWS = fs
  .readdirSync(urls.APP_URL)
  .filter(file => {
    // get all .html at the root of app/
    return file.match(/.ejs$/);
  })
  .map(view => {
    // all these files are now outputs
    return new HtmlWebpackPlugin({
      title: '👋 Give me a title 🔥',
      template: `${urls.BASE_URL}/app/${view}`,
      filename: `${view.replace('.ejs', '.html')}`,
      inject: "body",
      showErrors: env.devMode ? true : false,
      minify: {
        removeComments: true,
        removeRedundantAttributes: true
      }
    });
  });

module.exports = {
  SCRIPTS: SCRIPTS,
  STYLES: STYLES,
  VIEWS: VIEWS,
  ALL: ENTRIES
};
