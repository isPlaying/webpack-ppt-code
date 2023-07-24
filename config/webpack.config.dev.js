const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = (targetPath) => {
  return path.resolve(__dirname, "..", targetPath);
};

module.exports = merge(baseConfig, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
        include: /\.module\.less$/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
        exclude: /\.module\.less$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
        exclude: /\.module\.css$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve("./public/index.html"),
    }),
  ],
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
  },
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
  devtool: "source-map",
});
