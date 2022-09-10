const CssMinimizerWebpack = require("css-minimizer-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  path = require("path"),
  TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/script.js",
  output: {
    filename: "assets/bundle.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "assets/[hash][ext]",
  },
  mode: "production",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ejs$/,
        use: ["html-loader", "template-ejs-loader"],
      },
      {
        test: /\.s(c|a)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ejs", ".sass", ".css"],
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerWebpack()],
  },
  plugins: [
    new HtmlWebpackPlugin({ filename: "index.html" }),
    new MiniCssExtractPlugin({
      filename: "assets/bundle.css",
    }),
  ],
};
