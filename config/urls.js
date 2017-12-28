// =======================================================================//
// !  CONFIG URLS                                                         //
// =======================================================================//
const path = require("path");
const base_url = path.resolve(__dirname, "../");
const urls = {
  BASE_URL: base_url,
  APP_URL: path.join(base_url, "/app/"),
  APP_ASSETS_URL: path.join(base_url, "/app/src/"),
  DIST_URL: path.join(base_url, "/dist/"),
  DIST_APP_ASSETS_URL: path.join(base_url, "/dist/src/"),
  CONFIG: __dirname
};

const aliases = {
  "@js": path.resolve(urls.APP_ASSETS_URL, "js/"),
  "@sass": path.resolve(urls.APP_ASSETS_URL, "sass/")
};

let exportObj = {};

for (directory in urls) {
  exportObj[directory] = urls[directory];
}
exportObj["aliases"] = aliases;

module.exports = exportObj;
