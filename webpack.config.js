const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");  // - использовать вместо style-loader для product-mode

module.exports = {
  entry: {
    "headers-and-footers": "./src/headers-and-footers.js",
    "colors-and-types": "./src/colors-and-types.js",
    "form-elements": "./src/form-elements.js",
    cards: "./src/cards.js",
    "landing-page": "./src/landing-page.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          /*MiniCssExtractPlugin.loader,*/ "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
        ],
      },
      { test: /\.(js)$/, use: "babel-loader", exclude: "/node_modules/" },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          // MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/common.blocks/page/vars-and-mixins.scss"],
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][hash].bundle.js",
    clean: true,
    assetModuleFilename: "assets/[name][hash][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/images/favicon.png",
      filename: "headers-and-footers.html",
      template: "./src/templates/headers-and-footers/headers-and-footers.pug",
      chunks: ["headers-and-footers"],
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/images/favicon.png",
      filename: "colors-and-types.html",
      template: "./src/templates/colors-and-types/colors-and-types.pug",
      chunks: ["colors-and-types"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/images/favicon.png",
      filename: "form-elements.html",
      template: "./src/templates/form-elements/form-elements.pug",
      chunks: ["form-elements"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/images/favicon.png",
      filename: "cards.html",
      template: "./src/templates/cards/cards.pug",
      chunks: ["cards"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/images/favicon.png",
      filename: "index.html",
      template: "./src/templates/landing-page/landing-page.pug",
      chunks: ["landing-page"],
      inject: "body",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.$": "jquery",
      "window.jQuery": "jquery",
    }),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    watchFiles: ["./src/**/*"],
  },
};
