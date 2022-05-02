const webpack = require("webpack");
const packageName = require("./package.json").name;
const { resolve } = require("path");
let argv = require("yargs-parser")(process.argv.slice(2));
const { merge } = require("webpack-merge");
const _mode = argv.mode || "development";
const _modeflag = _mode === "development" ? false : true;
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WebpackBar = require("webpackbar");
const webpackBaseConfig = {
  entry: {
    main: resolve("src/web/index.tsx"),
  },
  output: {
    path: resolve(process.cwd(), "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        // include: 'node_modules',
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  resolve: {
    alias: { "@/*": ["src/*"] },
  },
};
module.exports = merge(webpackBaseConfig, _mergeConfig);
