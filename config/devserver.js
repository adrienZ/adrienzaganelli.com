// =======================================================================//
// !  CONFIG DEV SERVER                                                   //
// =======================================================================//
const path = require("path");
const urls = require("./urls");
const env = require("./env");
const ip = require("ip");

const urlComponents = {
  host: ip.address(), //current ip, same url for multiple devices
  port: 1234,
  build: () => "http://" + ip.address() + ":" + 1234 + "/"
};

module.exports = {
  contentBase: path.join(urls.BASE_URL, "dist"),
  // change this as you want
  compress: true,
  inline: true,
  noInfo: true,
  overlay: {
    warnings: false,
    errors: true
  },
  historyApiFallback: true,
  hot: true,
  https: false,
  open: false,
  progress: false,
  port: urlComponents.port,
  host: urlComponents.host,
  quiet: false // shut down console,
};
