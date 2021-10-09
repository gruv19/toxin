const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");  // - использовать вместо style-loader для product-mode

module.exports = {
  entry: {
    index: "./src/index.js",
    "headers-and-footers": "./src/headers-and-footers.js",
    "colors-and-types": "./src/colors-and-types.js",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", /*MiniCssExtractPlugin.loader,*/"css-loader"] },
      { test: /\.(js)$/, use: "babel-loader", exclude: "/node_modules/" },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          // MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: "./src/common.blocks/global/_vars.scss",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
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
    assetModuleFilename: 'assets/[name][hash][ext]'
  },
  plugins: [
    // new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.pug",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "headers-and-footers.html",
      template: "./src/headers-and-footers.pug",
      chunks: ["headers-and-footers"],
    }),
    new HtmlWebpackPlugin({
      filename: "colors-and-types.html",
      template: "./src/colors-and-types.pug",
      chunks: ["colors-and-types"],
    }),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
};
