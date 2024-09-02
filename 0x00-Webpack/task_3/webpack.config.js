const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  // Set mode to development
  entry: {
    header: './src/header.js',
    body: './src/body.js',
    footer: './src/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  // Update this to use 'static'
    },
    compress: true,
    port: 8564,  // Set dev server to run on port 8564
    open: true,  // Automatically open browser
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),  // Cleans build folder on each build
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
      template: './src/index.html',
    }),
  ],
  devtool: 'inline-source-map',  // Enable inline source mapping for better debugging
};
