const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "[name].bundle.js",
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, "/dist"),
    },
    open: true,
    port: 5555,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "../src"),
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpeg|gif|jpg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.webp$/i,
        use: ["file-loader","webp-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
