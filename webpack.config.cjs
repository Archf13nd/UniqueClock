const path = require("path");

module.exports = {
  entry: "/themes/default/index.js",
  mode: "production",
  devtool: "inline-source-map",
  devServer: {
    static: "./docs",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
    library: {
      name: "clockworkTowers",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  // optimization: {
  //   runtimeChunk: 'single'
  // }
};
