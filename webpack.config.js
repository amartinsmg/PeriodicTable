/**
  Configuration file for Webpack bundling tool.
*/

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { htmlWebpackPluginTemplateCustomizer } = require("template-ejs-loader"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  path = require("path"),
  TerserPlugin = require("terser-webpack-plugin"),
  { readFileSync } = require("fs"),
  JsonFile = readFileSync("data/periodic_table.json"),
  Elements = JSON.parse(JsonFile);

module.exports = {
  /**
    The entry point for the application.
  */

  entry: "./src/main.js",

  /**
      The output configuration for the bundled files.
      @property filename - The name of the output file.
      @property path - The path to the output directory.
      @property assetModuleFilename - The asset module filename pattern.
    */

  output: {
    filename: "assets/bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext]",
  },

  /**
      The mode configuration for Webpack.
    */

  mode: "production",

  /**
      The configuration options for the development server.
      @property static - The static file serving options.
      @property static.directory - The directory to serve static files from.
      @property port - The port number to listen on.
      @property open - Whether to open the default browser on startup.
    */

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    open: true,
  },

  /**
      The module configuration for Webpack.
      @property rules - The array of rules for processing files.
    */
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ejs$/i,
        use: ["html-loader", "template-ejs-loader"],
      },
      {
        test: /\.s(c|a)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  /**
    The resolve configuration for Webpack.
    @property extensions - The list of file extensions to resolve.
  */

  resolve: {
    extensions: [".js", ".ejs", ".sass", ".scss", ".css"],
  },

  /**
    The optimization configuration for Webpack.
    @property minimizer - The array of plugins used for code optimization.
  */

  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },

  /**
    The plugins configuration for Webpack.
  */

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: htmlWebpackPluginTemplateCustomizer({
        templatePath: "./src/index.ejs",
        templateEjsLoaderOption: { data: { Elements } },
      }),
    }),
    new MiniCssExtractPlugin({
      filename: "assets/bundle.css",
    }),
  ],
};
