const ExtractTextPlugin = require("extract-text-webpack-plugin");
const env = require("./env");

const extractStaticSass = new ExtractTextPlugin({
  filename: getPath => {
    // remove the -static key from the chunkname
    const stylesheetName = getPath("[name]");
    return getPath(
      env.devMode ? "src/css/[name].css" : "src/css/[name].css"
    ).replace(stylesheetName, stylesheetName.replace("-static", ""));
  }
});

const extractSass = new ExtractTextPlugin({
  // filename: env.devMode
  //   ? "src/css/[name].css"
  //   : "src/css/[name].[contenthash].css",
  filename: "src/css/[name].css",
  disable: env.devMode,
  allChunks: true
});

const cssLoaders = [
  { loader: "css-loader", options: { importLoaders: 1 } },
  {
    loader: "postcss-loader",
    options: {
      plugins: loader => [require("autoprefixer")]
    }
  }
];

module.exports = {
  eslint: {
    // ES6
    enforce: "pre",
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ["eslint-loader"]
  },
  js: {
    // ES6
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ["babel-loader"]
  },
  css: {
    test: /\.css$/,
    use: extractSass.extract({
      fallback: "style-loader",
      use: [...cssLoaders]
    })
  },
  staticSass: {
    test: /\.scss$/,
    use: extractStaticSass.extract({
      use: [...cssLoaders, "sass-loader"],
      fallback: "style-loader"
    })
  },
  sass: {
    test: /\.scss$/,
    use: extractSass.extract({
      use: [...cssLoaders, "sass-loader"],
      fallback: "style-loader"
    })
  },
  files: {
    test: /\.(woff|woff2|eot|ttf|svg|jpg|png|jpeg|gif|tiff|cr2)$/,
    loader: "url-loader?limit=100"
  },
  extractSass,
  extractStaticSass
};
